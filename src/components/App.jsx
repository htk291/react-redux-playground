import React from 'react'
import {Link} from 'react-router'

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Form</Link></li>
          <li><Link to="/input">Input</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>

        { this.props.children }
      </div>
    )
  }
}