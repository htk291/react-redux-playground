import { connect } from 'react-redux'
import FormApp from 'COMPONENTS/FormApp'

const SEND = '@@SEND'

// Action Creators
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  }
}

function mapStateToProps(reducers) {
  return {
    value: reducers.formReducer.value,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  }
}
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp)

export default AppContainer