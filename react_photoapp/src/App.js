import React, { useState, useEffect } from 'react';
import DogImage from './components/DogImage';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('https://reqres.in/api/users');
      const data = await response.json();
      console.log(data)
      setImages(data.data);
    }
    fetchImages();
  }, []);

  return (
    <div>
      {images.map((image) => (
        <DogImage
          key={image.id}
          image={image.avatar}
          likes={0}
          onLike={() => console.log('Like clicked')}
        />
      ))}
    </div>
  );
}

export default App;
