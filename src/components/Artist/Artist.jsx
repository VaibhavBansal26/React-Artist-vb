import React from 'react';
import axios from 'axios';
import AlbumList from './AlbumList';
//import JSON from '../../db.json';
const REQ_URL= 'https://database-vb.herokuapp.com/artists';

class Artist extends React.Component {
    state={
        artist:''
    }

   componentDidMount(){
        axios.get(`${REQ_URL}/${this.props.match.params.artistid}`)
        .then(response =>{
            this.setState({artist:response.data});
        })
    }
    render(){
        const artist = this.state.artist;
        return(
            <>
            <div className="artist_bio">
                <div className="avatar">
                    <span style={{background:`url('/images/covers/${artist.cover}.jpg') no-repeat`}}></span>
                </div>
                <div className="bio">
                   <h3>{artist.name}</h3>
                   <div className="bio_text">
                       {artist.bio}
                   </div>
                </div>
                <AlbumList album={artist.albums}/>
            </div>
            </>
        )
    }
}

export default Artist;