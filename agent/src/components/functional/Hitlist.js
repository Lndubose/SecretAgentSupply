import React from 'react';
import { connect } from 'react-redux';
import { addTarget } from '../../store/actions';

import Target from '../presentatnional/Target'

class Hitlist extends React.Component {
  render() {
    return (
      <div className="Hitlist">
        <div>
          {this.props.hitlistTargets.map(target => {
            return <Target target={target} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    hitlistTargets: state,
  }
}

export default connect(mapStateToProps, { addTarget })(Hitlist);