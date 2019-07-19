import React from 'react';

const LastLogin = (props) => {
  return (
    <div>
      Online:<br />
      <select
        id="lastLogin"
        name="lastLogin"
        onChange={props.handleChange}
      >
        <option value={0}>-</option>
        <option value={0}>Today</option>
        <option value={1}>1 Day Ago</option>
        <option value={3}>3 Days Ago</option>
        <option value={7}>7 Days Ago</option>
      </select>
      <br />
    </div>
  );
};



export default LastLogin;