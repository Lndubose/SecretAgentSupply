import React from 'react';
import { items } from '../../storeDummyData.js';
import Product from '../presentatnional/Product';

import styled from 'styled-components';

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

class StoreArea extends React.Component {
  state = {
    items,
  };
  render() {
    return (
      <ItemsContainer>
        {this.state.items.map(item => {
          return <Product key={item.id} item={item} />;
        })}
      </ItemsContainer>
    );
  }
}

export default StoreArea;
