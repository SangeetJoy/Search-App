import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
import './ImageList.css'


class App extends React.Component{

    state ={images: []}

    onSearchSubmit = async (term) => {
     const response = await axios.get('https://api.unsplash.com/search/photos',{
         params: {query: term},
         headers:{
             Authorization: 'Client-ID 329a39f1d4b0b647f6e3301575d8884f70c59528186aaca395e1cbf257dc7522'
         }

     })
      console.log(this.setState({images: response.data.results}));
      
    }
    render(){
    return(
        <div className='ui container' style = {{marginTop: '20px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images = {this.state.images}/>
        </div>
    )
    }
    }

export default App;