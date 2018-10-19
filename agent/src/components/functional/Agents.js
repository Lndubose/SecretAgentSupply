import React from 'react';
import { Route, Link } from 'react-router-dom';

import Target from '../presentatnional/TargetForm';
import Hitlist from './Hitlist';
import AgentHome from '../presentatnional/AgentHome';

import { Container } from '../../GlobalStyle';

class Agents extends React.Component {
  render() {
    return (
      <Container>
        <Link to="/agents">Main</Link>
        <Link to="/agents/hitlist">Hitlist</Link>
        <Link to="/agents/target">Target</Link>

        <Route path="/agents/hitlist" component={Hitlist} />
        <Route path="/agents/target" component={Target} />
        <Route exact path="/agents" component={AgentHome} />
      </Container>
    );
  }
}

export default Agents;
