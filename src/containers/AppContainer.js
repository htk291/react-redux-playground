import { connect } from 'react-redux'
import FormApp from 'COMPONENTS/FormApp'
import { send } from 'REDUX/actions'

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