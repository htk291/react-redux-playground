import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { update } from 'REDUX/actions'

class List extends React.Component {
  search = e => {
    axios.get('data.json')
      .then(res => {this.props.update(res.data)})
  }
  render() {
    return (
      <div>
        <button onClick={this.search}>search</button>
        {this.props.list.map(x => (
          <div key={x.key}>
            <span >{x.a}</span>
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