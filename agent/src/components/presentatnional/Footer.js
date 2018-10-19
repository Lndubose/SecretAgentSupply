import React from 'react';
import styled from 'styled-components';


const FooterStyle = styled.div`
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items:center;
  height: 100px;
`

const Location = styled.div`

`
const Hours = styled.div`
  margin-right: 20px;
`
const Copyright = styled.h6`
  align-self: flex-end;
  margin-left: 10px;
  margin-bottom: 5px;
`

function Footer(props) {
  return (
    <FooterStyle >
    <Copyright>Copyright Secret Agent Supply Inc.</Copyright>
      <Location >
        <h3>Location:</h3>
        <p>-47.346436, 84.32354</p>
      </Location>
      <Hours >
        <h3>Hours:</h3>
        <p>0800 - 1800</p>
      </Hours>
      
    </FooterStyle>
  )
}

export default Footer;