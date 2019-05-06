import React from 'react';

function Link(props) {

    function handleClick(e) {
        console.log("Clicked");
        e.preventDefault();
        console.log("Clicked again");
    }
    
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <a href="/" onClick={handleClick}>
                Click me
            </a>
        </div>
    )
  }

  export default Link;