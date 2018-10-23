import React from 'react';
import PropTypes from 'prop-types';

import ExperienceCardList from '../c.experience.card.jsx'

export default class WorkSection extends React.Component {
  createLayout() {
    return (
      <div style={{ paddingBottom: "2rem" }}>
        <div className="title has-text-centered">
          <strong className="is-size-2">My Work Experiences</strong>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-6 is-vertical is-parent">
            <h1 className="tile is-child"></h1>
            <h1 className="tile is-child is-size-4 has-text-centered" style={{ paddingBottom: "40px" }}> {this.props.desc}</h1>
            <h1 className="tile is-child"></h1>
          </div>

          <div className="tile is-6 is-vertical is-parent">
            <ExperienceCardList className="tile is-child" record={this.props.record} />
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <section id="about-work" className="hero is-info" style={{ backgroundColor: "#23af7e" }}>
        <div className="hero-body">
          <div className="container">
            {this.createLayout()}
          </div>
        </div>
      </section>
    )
  }
}

WorkSection.propTypes = {
  desc: PropTypes.string.isRequired,
  record: PropTypes.array.isRequired
}