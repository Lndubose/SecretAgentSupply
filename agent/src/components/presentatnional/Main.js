import React from 'react';
import styled from 'styled-components';

import { Container } from '../../GlobalStyle';

const MenuNavigation = styled.div`
  background: maroon;
`;

const MenuNavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Button = styled.button`
  background: none;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const StoreItems = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  background: maroon;
  color: white;
  font-size: 1.2rem;
  z-index: 1;
  border-radius: 5px;

  a {
    padding: 10px;
    cursor: pointer;
    border-bottom: 1px solid gray;
    border-radius: 5px;
  }
`;

const StoreSection = styled.div`
  position: relative;
  :hover ${StoreItems} {
    display: flex;
  }
`;

const MainStyle = styled.div`
  height: 200px;
`;

const MainContainer = styled.div`
  margin-top: 20px;
`;

function Main(props) {
  return (
    <div className="Main">
      <MenuNavigation>
        <Container>
          <MenuNavigationContainer>
            <StoreSection>
              <Button href="">Store</Button>
              <StoreItems>
                <a>Eyewear</a>
                <a>Apparel</a>
                <a>Gadgets</a>
                <a>Vehicles</a>
              </StoreItems>
            </StoreSection>
            <Button href="">Classes</Button>
            <Button href="">Contact</Button>
          </MenuNavigationContainer>
        </Container>
      </MenuNavigation>
      <MainStyle>
        <Container>
          <MainContainer>
            <h1>Store content area</h1>
          </MainContainer>
        </Container>
      </MainStyle>
    </div>
  );
}

export default Main;
