import React from 'react'
import Modal from 'COMPONENTS/Modal'
import { connect } from 'react-redux'
import { toggleModal } from 'REDUX/actions'

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.toggleModal}>
          open modal
        </button>
          <Modal>
            in Modal
          </Modal>
      </div>
    )
  }
}
export default connect(
  state => ({}),
  {toggleModal}
)(Wrapper)