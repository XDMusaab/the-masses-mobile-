// IDInfo.js
import React from 'react';

function IDInfo({ username }) {
  return (
    <div>
      <h2>ID Information</h2>
      <p>Welcome, {username}!</p>
      <p>ID: 123456</p>
      {/* Add more ID information as needed */}
    </div>
  );
}

export default IDInfo;
