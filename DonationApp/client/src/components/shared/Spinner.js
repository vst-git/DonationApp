import React from 'react';

const Spinner = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <div className="loading-text">
        <span className="letter" aria-hidden="true">
          L
        </span>
        <span className="letter" aria-hidden="true">
          o
        </span>
        <span className="letter" aria-hidden="true">
          a
        </span>
        <span className="letter" aria-hidden="true">
          d
        </span>
        <span className="letter" aria-hidden="true">
          i
        </span>
        <span className="letter" aria-hidden="true">
          n
        </span>
        <span className="letter" aria-hidden="true">
          g
        </span>
        <span className="dots">
          <span className="dot" aria-hidden="true">
            .
          </span>
          <span className="dot" aria-hidden="true">
            .
          </span>
          <span className="dot" aria-hidden="true">
            .
          </span>
        </span>
      </div>
    </div>
  );
};

export default Spinner;
