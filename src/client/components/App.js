import React from 'react';
import style from './../style/App.css'
import axios from 'axios'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { user: '', feed: [] };
  }

  handleInputChange(e){
    this.setState({
      user: e.target.value
    })
  }

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

  renderImages(){
    return this.state.feed.map(function(item, index){
      return <div className={style.column} key={index} > <img key={index} src={ item } /> </div>
    });
  }

  render(){
    let container = this.renderImages();
    return(
      <div className={style.HelloWorld}>
        <form onSubmit={this.getInstagramPics.bind(this)}>
          <input
             type="text"
             value={this.state.user}
             onChange={this.handleInputChange.bind(this)}
             placeholder="Type in Instagram User!"
           />
         <button> Preview Instagram User! </button>
        </form>

        <input
          type="file"
          onChange={this.changeLayout.bind(this)}
        />

        <div className={style.ImageFeed}>
            <div className={style.Row_0}> { container.slice(0,3) } </div>
            <div className={style.Row_1}> { container.slice(3,6) } </div>
            <div className={style.Row_2}> { container.slice(6,9) } </div>
            <div className={style.Row_3}> { container.slice(9,12) } </div>
        </div>

      </div>
    )
  }
}
