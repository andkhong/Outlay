export default function inputReducer(state = [], action){
  switch(action.type){
    case 'UPDATE_INPUT_FIELD':
      return Object.assign({}, state, {
        input: action.input
      })
    default:
      return state
  }
}
