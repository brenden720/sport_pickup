import React from 'react';

const Distance = (props) => {
  return (
    <div>
      Distance Away:<br />
      <select
        id="distance"
        name="distance"
        onChange={props.handleChange}
      >
        <option value="Null">-</option>
        <option value="5">&lt;5 mi</option>
        <option value="10">&lt;10 mi</option>
        <option value="25">&lt;25 mi</option>
        <option value="50">&lt;50 mi</option>
        <option value="100">&lt;100 mi</option>
      </select>
      <br />
    </div>
  );
};



export default Distance;
