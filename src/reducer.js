export default (state, action) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        roomID: action.payload.roomID,
        userName: action.payload.userName,
      };
  
    default:
      return state;
  }
}