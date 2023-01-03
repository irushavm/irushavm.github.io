
import React from 'react'
import ReactGA from 'react-ga'
import Favicon from 'react-favicon'

import { createRoot } from 'react-dom/client'

import LandingSection from './comp/landing/c.landing.jsx'
import BioSection from './comp/about/bio/c.about.bio.jsx'
import WorkSection from './comp/about/work/c.about.work.jsx'
import VolSection from './comp/about/vol/c.about.vol.jsx'
import ProjectSection from './comp/project/c.project.jsx'
import FooterSection from './comp/footer/c.footer.jsx'

import constants from './const'

import '../scss/main.scss'

if (process.env.GA_MEASUREMENT_ID.length > 0) {
  ReactGA.initialize(process.env.GA_MEASUREMENT_ID)
  ReactGA.pageview(window.location.pathname + window.location.search)
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Favicon url='static/img/favicon.ico' />
        <LandingSection author={constants.bio.author} menu={constants.menu.items} />
        <BioSection {...constants.bio.about } />
        <WorkSection { ...constants.work } />
        <VolSection { ...constants.vol } />
        <ProjectSection { ...constants.proj } />
        <FooterSection badges={constants.bio.author.badges} name={constants.bio.author.name} />
      </div>
    )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)
