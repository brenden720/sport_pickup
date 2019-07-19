import React from 'react';
import styles from './AgeRange.css';

const AgeRange = (props) => {
  const ages = [];

  for (let i = 1; i <= 99; i++) {
    ages.push(i);
  }

  return (
    <div>
      <div>Age Range:</div>
      <div className={styles.age_container}>
        <select
          id="age age1"
          name="minAge"
          onChange={props.handleChange}
        >
          <option value="-">-</option>
          {ages.map(age => {
            return (
              <option value={age} key={age}>{age}</option>
            );

          })
        }
        </select>
        to
        <select
          id="age age2"
          name="maxAge"
          onChange={props.handleChange}
        >
          <option value="-">-</option>
          {ages.map(age => {
            return (
              <option value={age} key={age}>{age}</option>
            );

          })
          }
        </select>
      </div>
    </div>
  );
};



export default AgeRange;
