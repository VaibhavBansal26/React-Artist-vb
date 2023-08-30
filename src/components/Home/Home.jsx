import React from 'react';
import axios from 'axios';
import Banner from './banner';
import ArtistList from './artistList';
//import JSON from '../../db.json';
const URL_ARTIST = 'https://database-vb.herokuapp.com/artists';

class Home extends React.Component {

    state={
        artists:''
    }

    componentDidMount(){
        axios.get(URL_ARTIST).then(response => {
            this.setState({artists:response.data});
        this.fetchItems();
        //this.fectchTracks();
        })


    }

    /*fectchTracks = () => {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/infos", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b509d8dba8mshefec3f440c56bb2p1d3929jsn3754d9d2c1a1"
            }
        })
        .then(response => response.json()).then(response =>{
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }*/





    fetchItems = () => {
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=arianagrande", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b509d8dba8mshefec3f440c56bb2p1d3929jsn3754d9d2c1a1"
            }
        })
        .then(response => response.json()).then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });

    }

    render(){

        return(
            <>
            <Banner></Banner>
            <ArtistList artist = {this.state.artists}/>
            </>
        )
    }
}

export default Home;