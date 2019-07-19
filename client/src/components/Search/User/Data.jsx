import React from 'react';
import styles from './Data.css';

const Data = (props) => {
  const { user } = props;

  return (
    <div className={styles.data_container}>
      <div>
        Username: {user.nickname}
      </div>
      <div>
        Gender: {user.gender}
      </div>
      <div>
        Sports: {user.sports.map((sport, idx) => {
        return <span key={idx}>{sport} </span>;
        })}
      </div>
      <div>
        Skill Level: {user.skillLevel}
      </div>
      <div>
        Activity Level: {user.activityLevel}
      </div>
      <div>
        Interests: {user.interests}
      </div>
    </div>
  );
};



export default Data;