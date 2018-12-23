import React from 'react';

function Product(props) {
  const { title, photoUrl, price } = props.item;

  return (
    <div>
      <img src={photoUrl} alt="Item" />
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  );
}

export default Product;
