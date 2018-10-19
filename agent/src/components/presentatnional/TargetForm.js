import React from 'react';

function Target(props) {
  return (
    <form className="Target">
      <h2>Target</h2>
      <div className="input">
        <label>Name</label>
        <input name="name" placeholder="Targets Name" />
      </div>
      <div className="input">
        <label>Location</label>
        <input name="location" placeholder="Targets Location" />
      </div>
      <div className="input">
        <label>Description</label>
        <textarea name="description" placeholder="Targets Description" />
      </div>
      <div className="input">
        <label>Payment</label>
        <input name="payment" placeholder="Payment for Job" />
      </div>
    </form>
  );
}

export default Target;
