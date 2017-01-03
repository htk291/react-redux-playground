import React from 'react'

class FormInput extends React.Component {
  send(e) {
    e.preventDefault()
    this.props.handleClick(this.myInput.value.trim())
    this.myInput.value = ''
    return
  }
  render() {
    return (
      <form>
        <input type="text" ref={ref => this.myInput = ref} defaultValue="" />
        <button onClick={e => this.send(e)}>Send</button>
      </form>
    )
  }
}
class FormDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    )
  }
}

export default class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput handleClick={this.props.onClick} />
        <FormDisplay data={this.props.value} />
      </div>
    )
  }
}