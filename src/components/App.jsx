import React from 'react'

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <div>HEADER</div>
        { this.props.children }
      </div>
    )
  }
}