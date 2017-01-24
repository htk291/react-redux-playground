import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { update } from 'REDUX/actions'

class ConditionsComponent extends React.Component {
  search = e => {
    axios.get('data.json', {params: {value: this.refs.input.value}})
      .then(res => {this.props.update(res.data)})
  }
  render() {
    return (
      <div>
        <input type='text' ref='input' defaultValue='' />
        <button onClick={this.search}>search</button>
      </div>
    )
  }
}
const Conditions = connect(
  state => ({value: state.list.value}),
  {update}
)(ConditionsComponent)

class List extends React.Component {
  render() {
    return (
      <div>
        <Conditions />
        {this.props.list.map(x => (
          <div key={x.key}>
            <span>{x.a}</span>
            <span>{x.b}</span>
            <span>{x.c}</span>
          </div>
        ))}
      </div>
    )
  }
}

export default connect(
  state => ({list: state.list.list}),
  {}
)(List)