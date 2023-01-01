import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, children }) => {
  if (!isShowing) {
    document.documentElement.classList.remove('is-clipped');
    return null;
  }
  document.documentElement.classList.add('is-clipped');
  return ReactDOM.createPortal(
    <React.Fragment>
      <div id='modal-root' className={`modal ${isShowing ? 'is-active' : ''}`} style={{zIndex:500}}>
        <div className='modal-background' onClick={hide}></div>
        <div className='modal-content'>
          {children}
          <div className='modal-close-section'>
            <button className='modal-close-btn' aria-label='close' onClick={hide}>Go Back</button>
          </div>
        </div>
      </div>
    </React.Fragment>, document.body
    );
};
  
export default Modal;