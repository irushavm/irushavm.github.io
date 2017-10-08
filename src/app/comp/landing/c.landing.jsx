import React from 'react';
import LandingHeader from './c.landing.header.jsx';
import LandingBody from './c.landing.body.jsx';

export default function renderLanding(props) {
  return (
    <div>
      <LandingHeader author={props.author} menu={props.menu} />
      <LandingBody {...props.author} />
    </div>
  );

}
