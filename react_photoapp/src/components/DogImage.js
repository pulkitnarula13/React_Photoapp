import React, { useState, useEffect } from 'react';

function DogImage(props) {
    const [likes, setLikes] = useState(0);


    return (
        <div>
        <img src={props.image} alt="Random dog" />
        <button onClick={() => setLikes(likes + 1)}>
            Like ({likes})
        </button>
        </div>
    );
}

export default DogImage;
