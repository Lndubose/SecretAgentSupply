import React from 'react';

import styled from 'styled-components';

const ProductContainer = styled.div`
  border: 2px solid black;
  width: 180px;
  padding: 20px 3%;
  margin: 5px 1%;
  max-height: 300px;
  text-align: center;

  h4 {
    margin-bottom: 7px;
  }

  p {
    font-size: 1.1rem;
  }
`;

const Image = styled.div`
  height: 150px;
  background-image: url(${props => (props.img ? props.img : '')});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
`;

function Product(props) {
  const { title, photoUrl, price } = props.item;

  return (
    <ProductContainer>
      <Image img={photoUrl} alt="Item" />
      <h4>{title}</h4>
      <p>${price}</p>
    </ProductContainer>
  );
}

export default Product;
