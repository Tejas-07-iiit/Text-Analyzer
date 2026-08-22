import React from 'react';

const Loader = () => {
  return (
    <div className="loader-spinner-wrapper my-3">
      <div className="spinner-border text-primary" role="status" style={{ width: '2.5rem', height: '2.5rem' }}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
