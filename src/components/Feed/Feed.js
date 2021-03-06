import React from 'react';
import style from './../App.css';

export default class Feed extends React.Component {

  renderImages(){
    const { upload, feed } = this.props;
    let newFeed = upload.reverse().concat(feed);
    return newFeed.map( (item, index) => {
      return <div className={style.column} key={index} > <img key={index} src={ item.slice(0, item.length-1) } /> </div>
    });
  }

  render(){
  let container = this.renderImages();
    return(
      <div className={style.ImageFeed}>
          <div className={style.Row_0}> { container.slice(0, 3) } </div>
          <div className={style.Row_1}> { container.slice(3, 6) } </div>
          <div className={style.Row_2}> { container.slice(6, 9) } </div>
          <div className={style.Row_3}> { container.slice(9, 12) } </div>
      </div>
    )
  }
}
