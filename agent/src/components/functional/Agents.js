import React from 'react';
import { Route, Link } from 'react-router-dom';

import Target from '../presentatnional/TargetForm';
import Hitlist from './Hitlist';

class Agents extends React.Component {
  render() {
    return (
      <div>
        <Link to='/agents/hitlist'>Hitlist</Link>
        <Link to='/agents/target'>Target</Link>

        <Route path='/agents/hitlist' component={Hitlist} />
        <Route path='/agents/target' component={Target} />
      </div>
    )
  }
}

export default Agents;