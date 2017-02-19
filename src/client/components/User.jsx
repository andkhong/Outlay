import React from 'react';

import style from './App.css';

export default class User extends React.Component {

  getInstagramPics(e){
    let self = this;
    e.preventDefault();
    axios.post('/', {
      user: this.state.user
    })
    .then(function(response){
      self.setState({
        feed: response.data.images
      })
    })
    .catch(function(error){
      console.log(error)
    })
  }

  changeLayout(e){
    const reader = new FileReader();
    let ImageUpload = e.target.files[0];
    reader.onloadend = () => {
      let copy = this.state.feed;
      copy.unshift(reader.result);
      this.setState({ feed: copy })
    }
    reader.readAsDataURL(ImageUpload)
  }

  undoImage(){
    let copy = this.state.feed;
    copy = copy.splice(1);
    this.setState({
      feed: copy
    });
  }

  render(){
    return(
      <div>

        <form onSubmit={this.getInstagramPics.bind(this)}>
          <input
             type="text"
             value={this.state.user}
             onChange={ this.props.handleInputChange }
             placeholder="Type in Instagram User!"
           />
         <button> Preview Instagram User! </button>
        </form>

        <input
          type="file"
          onChange={this.changeLayout.bind(this)}
        />

        <button onClick={this.undoImage.bind(this)}>
          Undo
        </button>

      </div>
    )
  }
}
