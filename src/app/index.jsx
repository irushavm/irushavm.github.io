
import React from 'react';
import { render } from 'react-dom';

import LandingSection from './comp/landing/c.landing.jsx';
import BioSection from './comp/about/bio/c.about.bio.jsx';
import WorkSection from './comp/about/work/c.about.work.jsx';
import VolSection from './comp/about/vol/c.about.vol.jsx';
import ProjectSection from './comp/project/c.project.jsx';
import FooterSection from './comp/footer/c.footer.jsx';

import constants from './const/const';

import '../scss/main.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <LandingSection author={constants.bio.author} menu={constants.menu.items} />
        <BioSection {...constants.bio.about } />
        <WorkSection { ...constants.work } />
        <VolSection { ...constants.vol } />
        <ProjectSection { ...constants.proj } />
        <FooterSection badges={constants.bio.author.badges} name={constants.bio.author.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
