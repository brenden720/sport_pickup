import React from 'react';

const Gender = (props) => {
  return (
    <div>
      Gender:<br />
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={props.gender === "male"}
          className="form-gender-input"
          onChange={props.handleChange}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={props.gender === "female"}
          className="form-gender-input"
          onChange={props.handleChange}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="nopref"
          checked={props.gender === "nopref"}
          className="form-gender-input"
          onChange={props.handleChange}
        />
        No Preference
      </label>
      <br />
    </div>
  );
};



export default Gender;