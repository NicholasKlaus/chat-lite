import React, { useState } from "react";
import axios from "axios";


export const JoinBlock = ({ onLogin }) => {
  const [roomID, setRoomID] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () =>{
    if(!roomID || !userName) {
      return alert("Please enter roomID adn your Name");
    }
    const obj = {
      roomID,
      userName
    }
    setIsLoading(true);
    await axios.post('/rooms', obj)
    onLogin(obj);
  }

  return (
    <div className="wrapper">
      <h2>Sign In</h2>
      <input
        className="inp"
        type="text"
        placeholder="Enter roomID"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
      />
      <input
        className="inp"
        type="text"
        placeholder="Enter your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="btn btn-signin" disabled={isLoading} onClick={signIn}>
        {isLoading ? 'Loading...' : 'Sign In'}
      </button>
    </div>
  );
};
