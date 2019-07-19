import React from 'react';
import styles from './User.css';
import Picture from './Picture';
import Data from './Data';
import Message from './Message';

class User extends React.Component {

  render() {
    const {user} = this.props;

    return (
      <div className={styles.user_container}>
        <Picture className={styles.user_picture} />
        <Data user={user} className={styles.user_data}/>
        <Message className={styles.user_message}/>
      </div>
    );
  }
}


export default User;
