import React from 'react';
import styled from 'styled-components';

import { Container } from '../../GlobalStyle';

const FooterStyle = styled.div`
  background: black;
  color: white;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 5px 0;
`;

const Location = styled.div`
  padding: 0;
`;

const Hours = styled.div`
  margin-right: 20px;
`;
const Copyright = styled.h6`
  align-self: flex-end;
  margin-left: 10px;
  margin-bottom: 5px;
`;

function Footer(props) {
  return (
    <FooterStyle>
      <Container>
        <FooterContainer>
          <Copyright>Copyright Secret Agent Supply Inc.</Copyright>
          <Location>
            <h3>Location:</h3>
            <p>-47.346436, 84.32354</p>
          </Location>
          <Hours>
            <h3>Hours:</h3>
            <p>0800 - 1800</p>
          </Hours>
        </FooterContainer>
      </Container>
    </FooterStyle>
  );
}

export default Footer;
