import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  let result;
  isLoggedIn ? result = <UserGreeting /> : result= <GuestGreeting />
  return result;
}

export default Greeting;