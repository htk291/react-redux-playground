import React from 'react'
import { connect } from 'react-redux'
import { toggleModal } from 'REDUX/actions'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Modal extends React.Component {
  render() {
    const emptyBackground = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      padding: 50  
    }
    const backdropStyle = Object.assign({}, emptyBackground, {
      background: 'rgba(0,0,0,0.5)'
    })  
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    }
    return (
      <div style={this.props.isOpen ? backdropStyle : null}>
        <CSSTransitionGroup transitionName="modal"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
        {this.props.isOpen && 
          (
            <div style={emptyBackground}>
              <div style={modalStyle} key={this.props.isOpen}>
                {this.props.children}
                <div className="footer">
                  <button onClick={this.props.toggleModal}>
                    Close
                  </button>
                </div>
              </div>           
            </div>
          )
        }
        </CSSTransitionGroup>
      </div>
    )
  }
}
export default connect(
  state => ({isOpen: state.modal.isOpen}),
  {toggleModal}
)(Modal)

// import React from 'react'
// import { connect } from 'react-redux'
// import { toggleModal } from 'REDUX/actions'
// import CSSTransitionGroup from 'react-addons-css-transition-group'

// class Modal extends React.Component {
//   render() {
//     if (!this.props.isOpen) {
//       return null
//     }
//     const backdropStyle = {
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         background: 'rgba(0,0,0,0.5)',
//         padding: 50  
//     }
//     const modalStyle = {
//         backgroundColor: '#fff',
//         borderRadius: 5,
//         maxWidth: 500,
//         minHeight: 300,
//         margin: '0 auto',
//         padding: 30
//     }
//     return (
//       <div>
//         <CSSTransitionGroup
//           transitionName="sample"
//           transitionEnterTimeout={1000}
//           transitionLeaveTimeout={1000}
//         >
//           <div key={this.props.isOpen} style={modalStyle}>
//              {this.props.children}
//              <div className="footer">
//                <button onClick={this.props.toggleModal}>
//                  Close
//                </button>
//              </div>
//            </div>
//         </CSSTransitionGroup>
//       </div>
//       // <div className="sample" key={this.props.isOpen} style={backdropStyle}>
//       //   <ReactCSSTransitionGroup transitionName="modal"
//       //     transitionEnterTimeout={500}
//       //     transitionLeaveTimeout={500}
//       //     transitionLeave={false}
//       //   >
//       //     <div style={modalStyle}>
//       //       {this.props.children}
//       //       <div className="footer">
//       //         <button onClick={this.props.toggleModal}>
//       //           Close
//       //         </button>
//       //       </div>
//       //     </div>
//       //   </ReactCSSTransitionGroup>
//       // </div>
//     )
//   }
// }
// export default connect(
//   state => ({isOpen: state.modal.isOpen}),
//   {toggleModal}
// )(Modal)