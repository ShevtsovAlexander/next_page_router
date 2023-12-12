import Head from "next/head";
import React, {FC} from "react";
import ContactProfile from "../../components/ContactProfile";
import {ContactInfoType} from "../../type/type";
import axios from "axios";
import {GetServerSideProps, InferGetServerSidePropsType} from "next";


export const getServerSideProps = (async (context) => {
    const {id} = context.query
    const response = await axios<ContactInfoType>(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data: ContactInfoType = response.data

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            contact: data
        },
    }
}) satisfies GetServerSideProps<{
    contact: ContactInfoType
}>
 const Contact: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({contact}) => {
    return (
        <>
            <Head>
                <title>
                    Contact
                </title>
            </Head>
            <ContactProfile  contact={contact}/>
        </>
    )
}

export default Contact