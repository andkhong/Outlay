import { connect } from 'react-redux';

import * as searchActionCreators from './../../actions/searchAction';
import Search from './Search';

const mapDispatchToProps = (dispatch) => {
  return {
    storeUserImages: (user) => {
      dispatch(searchActionCreators.searchAction(user))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
