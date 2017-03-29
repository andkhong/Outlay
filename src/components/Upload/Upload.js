import React, { Component } from 'react';

export default class Upload extends Component {
  constructor(props){
    super(props);
    this.state = { image: null }
  }
  uploadImage(e){
    e.preventDefault();
    if(this.state.image){
      const { upload } = this.props;
      upload(this.state.image);
    } else console.log("No Image to upload");
  }
  handleImageInput(e){
    e.preventDefault();
    const reader = new FileReader();
    let image = e.target.files[0];
    reader.onloadend = () => {
      this.setState( { image: reader.result });
    }
    reader.readAsDataURL(image);
  }

  render(){
    return(
      <form onSubmit={this.uploadImage.bind(this)}>
        <input
          type="file"
          accept="image/x-png,image/jpeg"
          onChange={this.handleImageInput.bind(this)}
        />
        <button> Upload Image </button>
      </form>
    )
  }
}
