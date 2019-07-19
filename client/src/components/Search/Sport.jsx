import React from 'react';

const Sport = (props) => {
  return (
    <div>
      Sport:<br />
      <select
        id="sport"
        name="sport"
        onChange={props.handleChange}
      >
        <option value="null">-</option>
        <option value="Baseball">Baseball</option>
        <option value="Basketball">Basketball</option>
        <option value="Football">Football</option>
        <option value="Soccer">Soccer</option>
      </select>
      <br />
    </div>
  );
};



export default Sport;
