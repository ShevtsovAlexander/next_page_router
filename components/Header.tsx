import React, {FC} from 'react';
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderStyle = styled.header`
  background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.5)
  );
  display: flex;
  align-items: center;
  padding: 0 20px;
  min-height: 80px;
`
const Header: FC<any>  = (props) => {
    return (
        <HeaderStyle {...props}>
            <Navbar />
        </HeaderStyle>
    );
};

export default Header;