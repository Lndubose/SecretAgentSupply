import React from 'react';
import styled from 'styled-components';
import image from '../../images/moto.jpeg';

import { Container } from '../../GlobalStyle';

const JumboStyle = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 465px;
  position: relative;
  background-position: bottom center;
`;

const Title = styled.div`
  background: black;
  color: white;
  width: 32%;
  padding: 40px 3%;
  text-transform: uppercase;
  position: absolute;
  top: 24%;

  h6 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    line-height: 1.3;
  }
`;

function Jumbo(props) {
  return (
    <JumboStyle>
      <Container>
        <Title>
          <h6>New Arrival</h6>
          <h1>Sport Bikes and Motorcycles</h1>
        </Title>
      </Container>
    </JumboStyle>
  );
}

export default Jumbo;
