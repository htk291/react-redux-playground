import React from 'react'

export default class Hoge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isValid: false
    }
  }
  validator = str => {
    return /^[a-z\d]{8,100}$/.test(str)
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      isValid: this.validator(e.target.value),
    })
  }
  render() {
    return (
      <div>
        <input type='text' value={ this.state.value } onChange={ this.handleChange } />
        <span>{ this.state.isValid ? '✓' : '✕' }</span>
        <h1>{this.state.value}</h1>
      </div>
    );
  }
}