import Head from 'next/head'
import Heading from "../components/Heading";
import React, {FC} from "react";
import styled from "styled-components";
import Socials from "../components/Socials";

const HomeStyle = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
// export const getStaticProps = (async () => {
//     try{
//         const response = await axios<SocialsType[]>(`${process.env.API_HOST}/socials`);
//         const data: SocialsType[] = response.data
//
//
//         if (!data) {
//             return {
//                 notFound: true,
//             }
//         }
//
//
//         return {
//             props: {
//                 socials: data
//             },
//         }
//     } catch {
//         return {
//             props: {
//                 socials: undefined
//             },
//         }
//     }
// }) satisfies GetStaticProps;
const Home: FC = () => {
  return (
    <HomeStyle>
        <Head>
            <title>
                Home
            </title>
        </Head>
        <Heading  text={'Welcome to my Home Page'}/>
        <Socials/>
    </HomeStyle>
  )
}

export default Home