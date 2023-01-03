import React from 'react'
import PropTypes from 'prop-types'

export default class ExperienceCard extends React.Component {
  renderCardLogo (logo) {
    return (
      <div className="media-left">
        <figure>
          <img src={logo} width="60px" />
        </figure>
      </div>
    )
  }

  renderPlaceAndDuration (exp) {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child">
            <strong className="is-size-4">{exp.place}</strong>
          </div>
          <div className="tile is-child is-4">
            <b className="is-size-6" style={{ marginTop: '20px' }}>
              {exp.start + ' - ' + exp.end}
            </b>
          </div>
        </div>
      </div>
    )
  }

  renderPosition (exp) {
    return (
      <div className="tile is-ancestor" style={{ marginTop: '-35px' }}>
        <div className="tile is-parent">
          <div className="tile is-child">
            <small className="is-size-6">{'  ' + exp.position}</small>
          </div>
        </div>
      </div>
    )
  }

  renderDescription (desc) {
    return (
      <div className="tile is-ancestor" style={{ marginTop: '-10px' }}>
        <div className="tile is-parent">
          <div>
            {desc}
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className={this.props.className}>
        {
          this.props.record.map((exp, expIndex) => {
            return (
              <div key={`exp-${expIndex}`}className="box">
                <a href={exp.link} className="media" target="_blank" rel="noreferrer">
                  {this.renderCardLogo(exp.imgSrc)}
                  <div className="media-content">
                    <div className="content">
                      {this.renderPlaceAndDuration(exp)}
                      {this.renderPosition(exp)}
                      {this.renderDescription(exp.desc)}
                    </div>
                  </div>

                </a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

ExperienceCard.propTypes = {
  className: PropTypes.string.isRequired,
  record: PropTypes.array.isRequired
}
