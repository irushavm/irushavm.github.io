import React from 'react'
import PropTypes from 'prop-types'
import ProjectCard from './ProjectCard.jsx'

export default class ProjectSection extends React.Component {
  createLayout () {
    const recordGrid = [[]]
    this.props.record.forEach(function (rec, ind) {
      const index = Math.floor(ind / 3)
      recordGrid[index] = recordGrid[index] || []
      recordGrid[index].push(rec)
    })
    let paddingElementCount = recordGrid[recordGrid.length - 1].length % 3
    if (paddingElementCount !== 0) {
      while (paddingElementCount % 3 !== 0) {
        recordGrid[recordGrid.length - 1].push({})
        paddingElementCount++
      }
    }
    return (
      <div>
        <div className="title has-text-centered">
          <strong className="is-size-2">My Projects</strong>
        </div>
        <h1 className="is-size-4 has-text-centered" style={{ paddingBottom: '40px' }}>
          {this.props.desc}
        </h1>
        <div className="project-grid">
          {
            recordGrid.map((projectRow, projectRowIndex) => {
              return (
                <div key={`project-row-${projectRowIndex}`} className="columns">
                  {
                    projectRow.map((project, projectIndex) => {
                      return (
                        <div key={`exp-${projectRowIndex}-${projectIndex}`} className="column">
                          <ProjectCard project={project}/>
                        </div>
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

  render () {
    return (
      <section id="projects" className="hero is-success" style={{ backgroundColor: '#e04e4e' }}>
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
}
