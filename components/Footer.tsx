import React, {FC} from 'react';
import Heading from "./Heading";
import styled from "styled-components";


const FooterStyle = styled.footer`
  background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.5)
  );
  text-align: center;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  min-height: 80px;
`
const Footer: FC = (props) => {
    return (
        <FooterStyle {...props}>
           <Heading  text={'ALEXANDER SHEVTSOV project'} />
        </FooterStyle>
    );
};

export default Footer;