import React from 'react';


const AlbumList = (props) => {
    const showList = (album) => (
        album ?
        album.map((item,i)=>(
            <img key={i} alt ="img" src = {`/images/albums/${item.cover}.jpg`}/>
        ))
        :null

    )
    return(
    <div className="albums_list">{showList(props.album)}</div>
    )
}

export default AlbumList;