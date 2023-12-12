import Head from "next/head";
import React, {FC} from "react";
import ContactProfile from "../../components/ContactProfile";
import {ContactInfoType, PostInfoType} from "../../type/type";
import axios from "axios";
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";

export const getStaticPaths = (async () => {
    const response = await axios<PostInfoType[]>(`https://jsonplaceholder.typicode.com/users`)
    const data: PostInfoType[] = response.data

    const paths = data.map(({id}) => ({
        params: {
            id: id?.toString()
        },
    }))

    return {
        paths,
        fallback: false,
    }
}) satisfies GetStaticPaths


export const getStaticProps = (async (context) => {

    const response = await axios<ContactInfoType>(`https://jsonplaceholder.typicode.com/users/${context.params ? context.params.id : 1}`)
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
}) satisfies GetStaticProps<{
    contact: ContactInfoType
}>
 const Contact: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({contact}) => {
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