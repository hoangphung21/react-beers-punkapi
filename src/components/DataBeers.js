import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataBeers() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
            .then(res => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.name}</li>)
                }
            </ul>
        </div>
    );

}

export default DataBeers