import React from 'react';
import styled from 'styled-components';

const MenuNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background: maroon;
`
const Button = styled.button`
  background: none;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`
const MainContainer = styled.div`
  height: 200px;
`

function Main(props) {
  return (
    <div className="Main">
      <MenuNavigation>
        <Button href="">Store</Button>
        <Button href="">Classes</Button>
        <Button href="">Contact</Button>
      </MenuNavigation>
      <MainContainer>
        <h1>Store content area</h1>
      </MainContainer>
    </div>
  )
}

export default Main;