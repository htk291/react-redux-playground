import { connect } from 'react-redux'
import InputCount from 'COMPONENTS/InputCount'
import { change } from 'REDUX/actions'

function mapStateToProps(reducers) {
  return {
    value: reducers.inputReducer.value,
    isValid: reducers.inputReducer.isValid,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onChange(value) {
      dispatch(change(value))
    }
  }
}
const InputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputCount)

export default InputContainer