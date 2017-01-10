import React from 'react'
import { connect } from 'react-redux'
import { change } from 'REDUX/actions'


class InputCount extends React.Component {
  change = (e) => {
    this.props.change(e.target.value)
  }
  render() {
    return (
      <div>
        <input type='text' value={ this.props.value } onChange={this.change} />
        <span>{ this.props.isValid ? '✓' : '✕' }</span>
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}

export default connect(
  state => ({value: state.input.value, isValid: state.input.isValid}),
  {change}
)(InputCount)

// exports.default = (0, _reactRedux.connect)(
//   function(state) {
//     return {
//       value: state.input.value,
//       isValid: state.input.isValid
//     };
//   },
//   { change: _actions.change }
// )(InputCount);