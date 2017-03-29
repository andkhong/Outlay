import React from 'react';
import axios from 'axios';

export default class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
  }
  handleChange(e){
    this.setState({ user: e.target.value });
  }
  getUserFeed(e){
    e.preventDefault();
    const { storeUserImages } = this.props;

    axios.post('/', {
      user: this.state.user
    }).then(function(response){
        storeUserImages(response.data.images);
    }).catch(function(error){
      console.log(error)
    });
  }

  render(){
    return(
      <form onSubmit={this.getUserFeed.bind(this)}>
          <input
             type="text"
             value={this.state.user}
             onChange={this.handleChange.bind(this)}
             placeholder="Type in Instagram User!"
           />
         <button> Preview Instagram User! </button>
      </form>
    )
  }
}
