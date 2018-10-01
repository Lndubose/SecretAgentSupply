import React from 'react';
import styled from 'styled-components';

import Jumbo from './Jumbo';
import Main from './Main';
import Footer from './Footer';


function Home(props) {
  return (
    <div className="Home">
      <Jumbo />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;