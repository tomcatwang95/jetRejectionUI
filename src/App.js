// src/App.js
import React from 'react';
import Header from './components/header/Header';
import SinglePhoto from './components/singlePhoto/SinglePhoto';
import './App.css';

const photos = [
  { url: 'https://via.placeholder.com/150', description: 'Photo 1' },
  { url: 'https://via.placeholder.com/150', description: 'Photo 2' },
  { url: 'https://via.placeholder.com/150', description: 'Photo 3' },
  // Add more photos as needed
];

function App() {
  return (
    <div className="app">
      <Header />
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <SinglePhoto key={index} url={photo.url} description={photo.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
