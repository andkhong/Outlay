import { connect } from 'react-redux';

import Feed from './Feed';

const mapStateToProps = (state) => {
  const { upload } = state.uploadReducer;
  const { feed } = state.searchReducer;
  return {
    upload,
    feed
  }
}

export default connect(
  mapStateToProps
)(Feed);
