import React, { useEffect } from "react";
import { JoinBlock } from "./components/index";
import reducer from "./reducer";
import socket from "./socket";

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomID: null,
    userName: null
  });

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    });
    socket.emit('ROOM/JOIN', obj);
  }

  useEffect(() => {
    socket.on('ROOM/JOINED', (users) => {
      console.log('new user', users);
    });
  }, [])

  return (
    <div className="App">
      <div className="container">
        {!state.joined && <JoinBlock onLogin={onLogin} />}
      </div>
    </div>
  );
}

export default App;
