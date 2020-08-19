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
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.name}</li>)
                }
            </ul>
            <div>
                <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
                <button type="button" onClick={handleClick}>Search</button>
                <div>{posts.map(post => <li key={post.id}>{post.description}</li>)}</div>
                <div>{posts.map(post => <img key={post.id} src={post.image_url}></img>)}</div>
            </div>
        </div>


    );

}

export default DataBeers