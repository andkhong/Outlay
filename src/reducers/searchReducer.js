function searchReducer(state = { feed: []}, action){
  switch (action.type) {
    case "GET_USER":
      return Object.assign({}, state, {
        feed: action.user
      });
    default:
      return state;
  }
}

export default searchReducer;
