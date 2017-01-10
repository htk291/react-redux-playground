import React from 'react'
import {connect} from 'react-redux'
import {send} from 'REDUX/actions'
import {Link} from 'react-router'

class FormInput extends React.Component {
  send = (e) => {
    e.preventDefault()
    this.props.send(this.myInput.value.trim())
    this.myInput.value = ''
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" ref={ref => this.myInput = ref} defaultValue="" />
          <button onClick={this.send}>Send</button>
        </form>
        <Link to="hoge">to hoge</Link>
      </div>
    )
  }
}
class FormDisplay extends React.Component {
  render() {
    return (
      <div>
        {this.props.value}
      </div>
    )
  }
}

class FormApp extends React.Component {
  render() {
    return (
      <div>
        <FormInput send={this.props.send} />
        <FormDisplay value={this.props.value} />
      </div>
    )
  }
}

export default connect(
  state => ({value: state.form.value}),
  {send}
)(FormApp)