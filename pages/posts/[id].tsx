import React, {FC} from 'react';
import Head from "next/head";
import axios from "axios";
import {PostInfoType} from "../../type/type";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import PostInfo from "../../components/PostInfo";



export const getStaticPaths = (async () => {
    const response = await axios<PostInfoType[]>(`https://jsonplaceholder.typicode.com/posts`)
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
})

export const getStaticProps = (async (context) => {


    const response = await axios<PostInfoType>(`https://jsonplaceholder.typicode.com/posts/${context.params ? context.params.id : 1}`)
    const data: PostInfoType = response.data

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post: data
        },
    }
    }) satisfies GetStaticProps<{
    post: PostInfoType
}>
const Posts: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({post}) => {
    return (
        <div>
            <Head>
                <title>
                    Posts
                </title>
            </Head>
            <PostInfo post={post}/>
            </div>
    );
};

export default Posts;