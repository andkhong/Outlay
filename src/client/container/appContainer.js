import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as actionCreators from './../actions/action';

import Main from './Main';

function mapStateToProps(state) {
  return {
    input: state.input
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};


let App = connect(mapStateToProps, mapDispatchToProps)(Main);
export default App;
