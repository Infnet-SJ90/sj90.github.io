import React, { Component } from 'react';
import './style.css';

export default ({ size, decorative, children, ...props }) => {
  switch (size) {
  case 1:
    return <h1 {...props}>{children}</h1>;
  case 2:
    return <h2 {...props}>{children}</h2>;
  case 3:
    return <h3 {...props}>{children}</h3>;
  case 4:
    return <h4 {...props}>{children}</h4>;
  case 5:
    return <h5 {...props}>{children}</h5>;
  case 6:
    return <h6 {...props}>{children}</h6>;
  default:
    if (decorative) {
      return (
        <p className="paragraph">
          <span className="span">{children}</span>
        </p>
      );
    }
    return <h6 {...props}>{children}</h6>;
  }
};
