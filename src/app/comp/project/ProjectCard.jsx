
import React from 'react';

import Modal from '../modal/Modal.jsx';
import useModal from '../modal/useModal.jsx';

const ProjectCard = ({ project, index, rowIndex }) => {
  const { isShowing, toggle } = useModal();
  return (
    <div className="card has-text-centered card-project" onClick={toggle}>
      <div className="card-image image is-3by2">
        <img src={project.imgSrc} style={{ margin: "auto" }} />
      </div>
      <div className="card-content">
        <div className="is-size-4" style={{ fontWeight: 'bold' }}>
          {project.name}
        </div>
        <div className="is-size-6">
          {project.summary}
        </div>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      >
        <div style={{ textAlign: 'center' }}>
          <img src={project.imgSrc} className='modal-img' />
          <div className="is-size-2" style={{ fontWeight: 'bold' }}>
            {project.name}
          </div>
          <div className="is-size-6">
            {project.desc}
          </div>
          <div className="is-size-6">
            Click here for more info <a href={project.link}>{project.link}</a>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;