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
export const socials: SocialsType[] = [
    {
        id: 1,
        icon: 'youtube',
        path: 'https://www.youtube.com/watch?v=tyVQk-BAWms&ab_channel=thebootlegboy2',
    },
    {
        id: 2,
        icon: 'instagram',
        path: 'https://instagram.com/alexander.avraamov?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
    },
    {
        id: 3,
        icon: 'github',
        path: 'https://github.com/ShevtsovAlexander',
    },
    {
        id: 4,
        icon: 'vk',
        path: 'https://vk.com/alexander_avraamovich',
    },
];

const Socials = ({...props}) => {

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