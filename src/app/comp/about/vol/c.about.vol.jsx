import React from 'react';
import PropTypes from 'prop-types';

export default class VolSection extends React.Component {

  createLayout() {
    var volRecords = [];
    for (var i = 0; i < this.props.record.length; i += 2) {
      volRecords.push([this.props.record[i], this.props.record[i + 1]]);
    }
    return (
      <div>
        <div className="has-text-centered" style={{ paddingBottom: "25px" }}>
          <strong className="has-text-white is-size-2">
            My Volunteer Experiences
          </strong>
        </div>

        <div className="has-text-white is-size-4 has-text-centered" style={{ paddingBottom: "40px" }}>
          {this.props.desc}
        </div>

        <div className="container" style={{ width: "50%", paddingTop: "1rem" }}>
          {
            volRecords.map((volRecordSet, volRecordIndex) => {
              return (
                <div key={`vol-set-${volRecordIndex}`} className="columns">
                  {
                    volRecordSet.map(function (vol, index) {
                      if (!vol) { return <div key={`vol-${volRecordIndex}-${index}`} className="column"></div> }
                      return (
                        <a href={vol.link} target="_blank" key={`vol-${volRecordIndex}-${index}`} className="column well-on-hover vol-tile" style={{ textAlign: (index % 2 === 0) ? "right" : "left", padding: "20px" }}>
                          <div className="no-hover">
                            <strong className="is-size-5">
                              {vol.place}
                            </strong>
                            <div>
                              <strong>
                                {vol.position}
                              </strong>
                            </div>
                            <div>
                              {vol.start + (!vol.end ? "" : " - " + vol.end)}
                            </div>
                          </div>
                        </a>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }

  render() {
    return (
      <section id="about-vol" className="hero" style={{ backgroundColor: "#eda131" }}>
        <div className="hero-body">
          <div className="container">
            {this.createLayout()}
          </div>
        </div>
      </section>
    )
  }
}

VolSection.propTypes = {
  desc: PropTypes.string.isRequired,
  record: PropTypes.array.isRequired
}

