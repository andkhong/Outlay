import React from 'react';
import style from './../style/App.css'
import axios from 'axios'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { user: '', feed: { ImageCounts: 0 } };
  }

  handleInputChange(e){
    this.setState({
      user: e.target.value
    })
  }

  getInstagramPics(e){
    let self
    e.preventDefault()
    self = this
    axios.post('/', {
      user: this.state.user
    })
    .then(function(response){
      self.setState({
        feed: response.data
      })
      console.log(self.state)
    })
    .catch(function(error){
      console.log(error)
    })
  }

  changeLayout(e){
    let reader = new FileReader();
    let ImageUpload = e.target.files[0];

    reader.onloadend = () => {
      var readImage = reader.result;
      var metaData = this.state.feed;
      for(var i = 0; i <= metaData.ImageCounts; i++){
        var temp = metaData[i];
        metaData[i] = readImage;
        readImage = temp;
      }
      this.setState({
          feed: metaData
      })
    }
    reader.readAsDataURL(ImageUpload)
    ImageUpload = null;
  }

  render(){
    let container = [];
    for(let i = 0; i <= this.state.feed.ImageCounts; i++){
      let column = "Column_" + i%3;
      container[i] = <div className={style[column]} key={i} > <img key={i} src={ this.state.feed[i] } /> </div>
    }

    return(
      <div className={style.HelloWorld}>
        <form onSubmit={this.getInstagramPics.bind(this)}>
          <input
             type="text"
             value={this.state.user}
             onChange={this.handleInputChange.bind(this)}
             placeholder="Type in Instagram User!"
           />
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
