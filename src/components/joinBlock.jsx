import React from "react";
import { socket } from "../socket";

export const JoinBlock = () => {

  return(
    <div className="wrapper">
      <h2>Sign In</h2>
      <input className="inp" type="text" placeholder="Enter roomID" />
      <input className="inp" type="text" placeholder="Enter your Name" />
      <button className="btn btn-signin">Sign In</button>
    </div>
  );
}