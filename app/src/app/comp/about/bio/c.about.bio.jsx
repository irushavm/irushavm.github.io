import React from 'react';

export default function renderBioSection(props) {
  return (
    <section id="about" className="hero is-info" style={{ backgroundColor: "#318fed" }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="title has-text-centered">
            <strong className="is-size-2">About Me</strong>
          </div>
          <h1 className="column is-size-4" style={{ paddingBottom: "40px" }}>
            {props.desc}
          </h1>
        </div>
      </div>
    </section>
  )
}
