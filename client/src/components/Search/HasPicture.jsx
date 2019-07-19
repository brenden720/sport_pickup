import React from 'react';

const HasPicture = (props) => {
  const {handleChange, hasPicture} = props;

  return (
    <div>
      <input 
        type="checkbox" 
        id="hasPicture" 
        name="hasPicture" 
        checked={hasPicture} 
        onChange={handleChange} 
      />
      <label>Has Picture</label>
      <br />
    </div>
  );
};



export default HasPicture;
