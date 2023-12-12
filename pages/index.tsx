import Head from 'next/head'
import Heading from "../components/Heading";
import React, {FC} from "react";
import styled from "styled-components";
import axios from "axios";
import { SocialsType} from "../type/type";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import Socials from "../components/Socials";

const HomeStyle = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const getStaticProps = (async () => {
        const response = await axios<SocialsType[]>(`${process.env.API_HOST}/socials`);
        const data: SocialsType[] = response.data


        if (!data) {
            return {
                notFound: true,
            }
        }


        return {
            props: {
                socials: data
            },
        }

}) satisfies GetStaticProps;
const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({socials}) => {
  return (
    <HomeStyle>
        <Head>
            <title>
                Home
            </title>
        </Head>
        <Heading  text={'Welcome to my Home Page'}/>
        <Socials socials={socials} />
    </HomeStyle>
  )
}

export default Home