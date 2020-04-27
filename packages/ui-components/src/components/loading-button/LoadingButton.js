import React from 'react';

const LoadingButton = ({ children }) => (
  <div>
    <button style={{backgroundColor: "tomato"}}>{children}</button>
  </div>
);

export { LoadingButton };