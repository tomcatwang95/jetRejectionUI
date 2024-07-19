import React from 'react';
import './SinglePhoto.css';

const SinglePhoto = ({ url, description }) => {
  return (
    <div className="single-photo">
      <img src={url} alt={description} />
      <p>{description}</p>
    </div>
  );
};

export default SinglePhoto;
