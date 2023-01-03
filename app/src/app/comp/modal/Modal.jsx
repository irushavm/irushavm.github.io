import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Modal = ({ isShowing, onClick, children }) => {
  if (!isShowing) {
    document.documentElement.classList.remove('is-clipped')
    return null
  }
  document.documentElement.classList.add('is-clipped')
  return ReactDOM.createPortal(
    <React.Fragment>
      <div id='modal-root' className={`modal ${isShowing ? 'is-active' : ''}`} style={{ zIndex: 500 }}>
        <div className='modal-background' onClick={onClick}></div>
        <div className='modal-content'>
          {children}
          <div className='modal-close-section'>
            <button className='modal-close-btn' aria-label='close' onClick={onClick}>Go Back</button>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
  )
}

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Modal
