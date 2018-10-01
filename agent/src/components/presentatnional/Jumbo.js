import React from 'react';
import styled from 'styled-components';
import image from '../../images/moto.jpeg';


const JumboStyle = styled.div`
  background-image: url(${image}); 
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
`

function Jumbo(props) {
  return (
    <JumboStyle>
      <h6>New Arrival</h6>
      <h1>Sport Bikes and Motorcycles</h1>
    </JumboStyle>
  )
}

export default Jumbo;
