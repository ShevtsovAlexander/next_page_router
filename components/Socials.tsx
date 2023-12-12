import Head from "next/head";
import styled from "styled-components";
import {SocialsType} from "../type/type";
import {FC} from "react";


const SocialsStyle = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      margin: 10px 10px;
      width: 40px;
    }
`


const Socials = ({socials, ...props}: {socials: SocialsType[]}) => {

  if (!socials) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
      </Head>
      <SocialsStyle {...props}>
        {socials && socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${icon}`}  aria-hidden="true" />
            </a>
          </li>
        ))}
      </SocialsStyle>
    </>
  );
}

export default Socials;