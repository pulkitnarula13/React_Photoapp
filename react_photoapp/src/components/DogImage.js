import React, { useState, useEffect } from 'react';

function DogImage() {
    const [imageUrl, setImageUrl] = useState('');
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        async function fetchImage() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message);
        }
        fetchImage();
    }, []);

    return (
        <div>
        <img src={imageUrl} alt="Random dog" />
        <button onClick={() => setLikes(likes + 1)}>
            Like ({likes})
        </button>
        </div>
    );
}

export default DogImage;
