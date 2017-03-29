import { connect } from 'react-redux';

import * as feedActionCreators from './../../actions/feedAction';
import Feed from './Feed';

const mapStateToProps = (state) => {
  const { upload } = state.uploadReducer;
  const { feed } = state.searchReducer;
  let newArray = [...upload].concat([...feed]);
  return {
    feed: newArray
  }
}

export default connect(
  mapStateToProps
)(Feed);
