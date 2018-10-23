import React from 'react';
import PropTypes from 'prop-types';

export default class ProjectSection extends React.Component {
  renderExperienceRow(expRow, rowI) {
    return expRow.map((exp, expInd) => {
      if (!exp.name) { return <div key={`exp-${rowI}-${expInd}`} className={`column ${expInd}`}> </div> }
      return (
        <div key={`exp-${rowI}-${expInd}`} className="column">
          <div className="card has-text-centered" style={{ margin: "25px", height: "95%", borderRadius: "5px" }}>
            <a href={exp.link} target="_blank">
              <div className="card-image">
                <div className="image is-3by2">
                  <img src={exp.imgSrc} style={{ width: "96%", height: "96%", top: "2.5%", left: "2%", borderRadius: "5px 5px 0px 0px" }} />
                </div>
              </div>
              <div className="card-content">
                <div className="content">
                  <div className="is-size-4" style={{fontWeight:'bold'}}>
                    {exp.name}
                  </div>
                  <div className="is-size-6">
                    {exp.desc}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div> 
      )

    })
  }
  createLayout() {
    var recordGrid = [[]];
    this.props.record.forEach(function (rec, ind) {
      var index = Math.floor(ind / 3);
      recordGrid[index] = recordGrid[index] || [];
      recordGrid[index].push(rec);
    });
    var paddingElementCount = recordGrid[recordGrid.length - 1].length % 3;
    if (paddingElementCount !== 0) {
      while (paddingElementCount % 3 !== 0) {
        recordGrid[recordGrid.length - 1].push({})
        paddingElementCount++;
      }
    }
    const _this = this;
    return (
      <div>
        <div className="title has-text-centered">
          <strong className="is-size-2">My Projects</strong>
        </div>
        <h1 className="is-size-4 has-text-centered" style={{ paddingBottom: "40px" }}>
          {this.props.desc}
        </h1>
        <div className="project-grid">
          {
            recordGrid.map(function (expRow, expRowIndex) {
              return (
                <div key={`project-row${expRowIndex}`} className="columns">
                  {_this.renderExperienceRow(expRow, expRowIndex)}
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
  render() {
    return (
      <section id="projects" className="hero is-success" style={{ backgroundColor: "#e04e4e" }}>
        <div className="hero-body">
          <div className="container">
            {this.createLayout()}
          </div>
        </div>
      </section>
    )
  }
}

ProjectSection.propTypes = {
  desc: PropTypes.string.isRequired,
  record: PropTypes.array.isRequired
};