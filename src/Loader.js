import React from 'react';
import './loader.css';

function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
