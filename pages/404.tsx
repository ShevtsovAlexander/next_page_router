import React, {FC, useEffect} from 'react';
import {useRouter} from "next/router";
import Heading from "../components/Heading";
import Head from "next/head";
import styled from "styled-components";

const ErrorStyle = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Error: FC<any> = (props) => {
    const router= useRouter()

    useEffect(()=> {
        setTimeout(()=> {
            router.push('/')
        }, 3000)
    },[router])

    return (
        <ErrorStyle {...props}>
            <Head>
                <title>
                    404 Error
                </title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Heading text={'Ooops Error!'} />
        </ErrorStyle>
    );
};

export default Error;