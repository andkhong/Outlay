import { connect } from 'react-redux';

import Upload from './Upload';
import * as uploadActionCreators from './../../actions/uploadAction';

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (file) => {
      dispatch(uploadActionCreators.uploadImage(file))
    },
    undo: () => {
      dispatch(uploadActionCreators.undoImage())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Upload);
