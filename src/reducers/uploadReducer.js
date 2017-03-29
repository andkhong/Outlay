function uploadReducer(state = { upload: [] }, action){
  switch (action.type) {
    case "UPLOAD_IMAGE":
      let newArray = [...state.upload];
      newArray.unshift(action.image);
      return Object.assign({}, state, {
        upload: newArray
      })
    default:
      return state
  }
}

export default uploadReducer;
