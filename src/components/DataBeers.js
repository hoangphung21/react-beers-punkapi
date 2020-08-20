import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataBeers() {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [idClick, setIdClick] = useState(1);

    const handleClick = () => {
        setIdClick(id)
    }

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers/${idClick}`)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [idClick]);

    return (
        <div className="beer-data">
            {/* <ul>
                {
                    posts.map(posted => <li key={posted.id}>{posted.name}</li>)
                }
            </ul> */}


            <input type="text" value={id} placeholder="Enter ID of the beer." onChange={e => setId(e.target.value)}></input>
            <button disabled={!id} type="button" onClick={handleClick}>Search</button>
            <div>{posts.map(post => <p key={post.id}>{post.name}</p>)}</div>
            <div>{posts.map(post => <p key={post.id}>{post.description}</p>)}</div>
            <div className="beer-image">{posts.map(post => <img key={post.id} src={post.image_url}></img>)}</div>

        </div>


    );

}

export default DataBeers