import React from 'react';
import styles from './Message.css';

const Message = (props) => {
  return (
    <div className={styles.message_container}>
      <button type="button">
        Send Message
      </button>
    </div>
  );
};



export default Message;