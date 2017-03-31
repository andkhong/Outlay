function uploadReducer(state = { upload: [] }, action){
  switch (action.type) {
    case "UPLOAD_IMAGE":
      let newArray = [...state.upload];
      newArray.push(action.image);
      return Object.assign({}, state, {
        upload: newArray
      })
    case "UNDO_IMAGE":
      newArray = [...state.upload];
      newArray.pop();
      return Object.assign({}, state, {
        upload: newArray
      })
    default:
      return state
  }
}

export default uploadReducer;
