
import React from 'react';
import { render } from 'react-dom';


import LandingSection from './comp/landing/c.landing.jsx';
import AboutBioSection from './comp/about/bio/c.about.bio.jsx';
// import AboutWorkSection from './comp/about/work/c.about.work';
// import AboutVolSection from './comp/about/vol/c.about.vol';
import ProjectSection from './comp/project/c.project.jsx';
import FooterSection from './comp/footer/c.footer.jsx';

import constants from './const/const';


class App extends React.Component {

  render() {
    return(
      <div>
      <LandingSection author={constants.bio.author} menu={constants.menu.items}/>
         <AboutBioSection {...constants.bio.about } />
        {/*  <AboutWorkSection { ...constants.work } />
    <AboutVolSection { ...constants.vol } />*/}
          <ProjectSection { ...constants.proj } />
          <FooterSection badges={constants.bio.author.badges} name={constants.bio.author.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
