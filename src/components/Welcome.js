import React from 'react';

function Welcome(props) {
    const element = (
        <div>
          <h1>Hello {props.name}</h1>
        </div>
      );
      return (
          element
      )
  }

  export default Welcome;