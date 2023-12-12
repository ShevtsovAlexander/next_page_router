import React, {FC} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
import vercelsvg from "../public/aK_T1t99Bd1Z-pmm05FdLCZKaR83Ab27IQl_261JjYZRAkVTOppQKgCV4DFbmTpHUjgOCaLZO_3m8BsqVs4UejqG.jpeg"
import styled from "styled-components";


const NavBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;


  a {
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 5% 50px;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;

    &.active {
      background-color: rgba(64, 69, 200, 0.32);
      border-radius: 5px;

    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  
  .image {
    border-radius: 50%;
    width: 50px ;
    height: 50px;
  }
`

const navigation = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
        id: 2,
        title: 'Contacts',
        path: '/contacts'
    },
    {
        id: 3,
        title: 'Posts',
        path: '/posts'
    }
]
const Navbar: FC<any> = (props) => {
    const {pathname} = useRouter()
    return (
        <NavBar {...props}>
            <div>
                <Image className={'image'}  src={vercelsvg}  width={50} height={50}  alt="vercel" />
            </div>
            <div>
            {navigation.map(item =>
                <Link  className={pathname === item.path ? 'active' :  undefined } href={item.path} key={item.id}>{item.title}</Link>
            )}
            </div>
        </NavBar>
    );
};

export default Navbar;