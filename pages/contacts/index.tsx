import Heading from "../../components/Heading";
import Head from "next/head";
import React from "react";
import axios from "axios";
import {ContactType} from "../../type/type";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import Link from "next/link";
import styled from "styled-components";

const ContactsStyle = styled.ul`
display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 5px;
`
 export const getStaticProps = (async () => {
        const response = await axios<ContactType[]>('https://jsonplaceholder.typicode.com/users')
        const data: ContactType[] = response.data


     if (!data) {
         return {
             notFound: true,
         }
     }


     return {
            props: {
                contacts: data
            },
        }
}) satisfies GetStaticProps

export default function Contacts({contacts}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Head>
                <title>
                    Contacts
                </title>
            </Head>
            <Heading text={'Main Contacts'}/>
            <ContactsStyle>
                {contacts && contacts.map(({id, name, username, email}: ContactType) =>
                    <li key={id}>
                    <Link href={`/contacts/${id}`}>
                        {name} {username}
                    </Link>
                    </li>
                )}
            </ContactsStyle>
        </>
    )
}
