import React from 'react';

const SkillLevel = (props) => {
  return (
    <div>
      Skill Level:<br />
      <select
        id="skillLevel"
        name="skillLevel"
        onChange={props.handleChange}
      >
        <option value="null">-</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <br />
    </div>
  );
};

export default SkillLevel;
