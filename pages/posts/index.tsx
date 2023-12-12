import Heading from "../../components/Heading";
import Head from "next/head";
import React from "react";
import axios from "axios";
import { PostsType} from "../../type/type";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import Link from "next/link";
import styled from "styled-components";

const PostsStyle = styled.ul`
display: flex;
  flex-direction: column;
  gap: 7px;
  padding: 5px;
`
 export const getStaticProps = (async () => {
        const response = await axios<PostsType[]>('https://jsonplaceholder.typicode.com/posts')
        const data: PostsType[] = response.data


     if (!data) {
         return {
             notFound: true,
         }
     }


     return {
            props: {
                posts: data
            },
        }
}) satisfies GetStaticProps

export default function Posts({posts}: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <>
            <Head>
                <title>
                    Posts
                </title>
            </Head>
            <Heading text={'Posts List:'}/>
            <PostsStyle>
                {posts && posts.map(({id, title}: PostsType) =>
                    <li key={id}>
                    <Link href={`/posts/${id}`}>
                       {title}
                    </Link>
                    </li>
                )}
            </PostsStyle>
        </>
    )
}
