import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BeersList() {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers`)
            .then(res => {
                console.log(res);
                setLists(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="beer-list">
            <ul>
                {
                    lists.map(list => <li key={list.id}>{list.id}: {list.name}</li>)
                }
            </ul>
        </div>
    )

}

export default BeersList;