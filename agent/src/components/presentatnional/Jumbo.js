import React from 'react';
import styled from 'styled-components';
import image from '../../images/moto.jpeg';


const JumboStyle = styled.div`
  background-image: url(${image}); 
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  position: relative;
`
const HeaderBox = styled.div`
  padding: 42px 3%;
  position: absolute;
  top: 42%;
  left: 15%;
  width: 30%;
  background: black;
  color: white;

  h1 {
    font-size: 2.4rem;
  }
`

function Jumbo(props) {
  return (
    <JumboStyle>
      <HeaderBox>
        <h6>New Arrival</h6>
        <h1>Sport Bikes and Motorcycles</h1>
      </HeaderBox>
    </JumboStyle>
  )
}

export default Jumbo;
