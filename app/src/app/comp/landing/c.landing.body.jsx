import React from 'react'

export default function renderLandingBody (props) {
  return (
    <section className="hero is-medium is-dark" style={{ backgroundColor: '#373737' }}>
      <div className="hero">
        <div className="hero-body" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
          <div className="container has-text-centered">
            <img src={props.image} style={{ border: '15px solid #222', borderRadius: '50%', width: '300px', marginBottom: 50 }} />
            <h1 className="title"> {props.title} </h1>
            <h1 className="subtitle"> {props.work} </h1>
            <p className="is-size-4">{props.welcome}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
