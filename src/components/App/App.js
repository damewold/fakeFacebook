import React, { Component } from 'react';
import './App.css';
import axios from 'react'

class App extends Component {

constructor(){
  super()
  this.state = {
    galleryList:[],
    galleryItem:{
      path:'path',
     description:'description',
     like:'likes'
    }
  }
}

componentDidMount(){
  this.getGalleryItem();
}

getGalleryItem = () => {
  axios.get('/gallery')
    .then( response => {
      this.setState({
        galleryList: response.data
      })
    })
    .catch( error => {
      alert(`Couldn't get inventory. Try again later`);
      console.log('Error ', error);
    })
}







  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery</p>
       
        <ul>
{this.state.galleryList.map(song =>
<li >
{galleryList.id}</li>)}
</ul> 
        
      </div>
    );
  }
}

export default App;
