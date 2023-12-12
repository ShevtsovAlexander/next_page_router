import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import {Roboto} from "next/font/google";
import React from "react";
import {createGlobalStyle} from "styled-components";


const roboto = Roboto({
    variable: '--font-roboto-100',
    weight: '500',
    subsets: ['latin'] })

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(to bottom, #3b47aee8, #76a2ff);
    color: #fff;
    font-size: 20px;
  }

  #__next {
    min-height: 100vh;
    display: grid;
    grid-auto-rows: auto 1fr auto;
  }

  main {
    padding: 20px;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
`

export default function App({ Component, pageProps }: AppProps) {
  return <>
           <Global />
           <Layout>
               <main >
                  <Component  {...pageProps} />
               </main>
           </Layout>
          </>
}
