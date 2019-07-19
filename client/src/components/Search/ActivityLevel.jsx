import React from 'react';

const ActivityLevel = (props) => {
  return (
    <div>
      Activity Level:<br />
      <select
        id="activityLevel"
        name="activityLevel"
        onChange={props.handleChange}
      >
        <option value="null">-</option>
        <option value="casual">Casual</option>
        <option value="competitive">Competitive</option>
      </select>
      <br />
    </div>
  );
};

export default ActivityLevel;
