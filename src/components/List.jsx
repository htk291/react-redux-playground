import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { update } from 'REDUX/actions'

class Conditions extends React.Component {
  search = e => {
    this.props.search({value: this.refs.input.value})
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

class List extends React.Component {
  search = args => {
    axios.get('data.json', {params: args})
      .then(res => {this.props.update(res.data)})
  }
  render() {
    return (
      <div>
        <Conditions search={this.search} />
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
  {update}
)(List)