import React from 'react';

function Target(props) {
  return (
    <div className="Target">
      <h3>{props.target.name}</h3>
      <p>Location: {props.target.location}</p>
      <p>Description: {props.target.description}</p>
      <p>${props.target.payment}</p>
    </div>
  )
}

export default Target;