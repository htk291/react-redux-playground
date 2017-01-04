import React from 'react'

export default class InputCount extends React.Component {
  validator = str => {
    return /^[a-z\d]{8,100}$/.test(str)
  }
  change = e => {
    e.preventDefault()
    this.props.onChange(e.target.value)
    return
  }
  render() {
    return (
      <div>
        <input type='text' value={ this.props.value } onChange={ this.change } />
        <span>{ this.props.isValid ? '✓' : '✕' }</span>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}