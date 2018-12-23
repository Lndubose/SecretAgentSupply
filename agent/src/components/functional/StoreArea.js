import React from 'react';
import { items } from '../../storeDummyData.js';
import Product from '../presentatnional/Product';

class StoreArea extends React.Component {
  state = {
    items,
  };
  render() {
    return (
      <div>
        {this.state.items.map(item => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default StoreArea;
