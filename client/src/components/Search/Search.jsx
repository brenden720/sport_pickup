import React from 'react';
import axios from 'axios';
import Sport from './Sport';
import Distance from './Distance';
import Gender from './Gender';
import LastLogin from './LastLogin';
import HasPicture from './HasPicture';
import AgeRange from './AgeRange';
import SkillLevel from './SkillLevel';
import ActivityLevel from './ActivityLevel';
import styles from './Search.css';
import User from './User/User';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sport: '',
      distance: null,
      gender: '',
      lastLogin: null,
      hasPicture: false,
      minAge: null,
      maxAge: null,
      skillLevel: '',
      activityLevel: '',
      isSubmitted: false,
      searchedData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
    this.onUserSubmit = this.onUserSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'distance' ||
        e.target.name === 'minAge' ||
        e.target.name === 'maxAge' ||
        e.target.name === 'lastLogin'
    ) {
      this.setState({
        [e.target.name]: parseInt(e.target.value),
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });

    }
  }

  handleCheckChange(e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }

  onUserSubmit(event) {
    const params = this.state;
    console.log(params);

    axios.get('/api/users', {
      params
    }).then(res => {
      const users = res.data;
      console.log(users);
      this.setState({
        ['isSubmitted']: true,
        ['searchedData']: users
      });
    });
    event.preventDefault();
  }

  isSearched() {
    const {isSubmitted, searchedData} = this.state;

    if (isSubmitted && searchedData.length) {
      return (
        <div>{searchedData.map(user => {
          return <User user={user} key={user._id} />;
        })}</div>
      );
    } else if (isSubmitted) {
      return <div>No users found</div>;
    }
  }

  render() {
    return (
      <div className={styles.search_container}>
        <div className={styles.search_boxcontainer}>
          <h2>Search for opponents</h2>
          <form onSubmit={this.onUserSubmit}>
            <Sport handleChange={this.handleChange} />
            <Distance handleChange={this.handleChange} />
            <Gender gender={this.state.gender} handleChange={this.handleChange} />
            <LastLogin handleChange={this.handleChange} />
            <HasPicture hasPicture={this.state.hasPicture} handleChange={this.handleCheckChange} />
            <AgeRange handleChange={this.handleChange} />
            <SkillLevel handleChange={this.handleChange} />
            <ActivityLevel handleChange={this.handleChange} />
            <input
              type="submit"
              value="Search" 
            />
          </form>
        </div>
        <div className={styles.search_resultscontainer}>
          {this. isSearched()}
        </div>
      </div>
    );
  }
}

export default Search;
