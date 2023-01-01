import React from 'react';

export default function renderLandingBody(props) {
  return (
    <div className="footer" style={{ backgroundColor: "#363636" }}>
      <div className="container">
        <div className="content has-text-centered">
          <p style={{ color: "#fff" }}>
            Website created by
            <strong style={{ color: "#fff" }}>
              {" " + props.name}
            </strong>
          </p>
          {props.badges.map(badge =>
            <span key={`badge-${badge.icon}`}>
              <a className="icon" href={badge.href} target="_blank">
                <i className={`fa fa-${badge.icon}  is-size-3`}>
                </i>
              </a>
              <span style={{ margin: "10px" }}></span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}