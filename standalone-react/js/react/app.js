requirejs.config({
  baseUrl:"/js/react",
    paths: {
        "react": "//cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min",
        "react-dom": "//cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min"
    }
});

requirejs([
  'react',
  'react-dom',
  //Constants
  'const/const',
  //Pages
  'comp/landing/c.landing',
  'comp/about/bio/c.about.bio',
  'comp/about/work/c.about.work',
  'comp/about/vol/c.about.vol',
  'comp/project/c.project',
  'comp/footer/c.footer',
], function(React, ReactDOM, constants,
  LandingSection, AboutBioSection, AboutWorkSection, AboutVolSection, ProjectSection, FooterSection) {
  ReactDOM.render(
    React.createElement('div', {},
    [
      LandingSection,
      React.createElement(AboutBioSection, constants.bio),
      React.createElement(AboutWorkSection, constants.work),
      React.createElement(AboutVolSection, constants.vol),
      React.createElement(ProjectSection, constants.proj),
      React.createElement(FooterSection, constants.footer),
    ]
    ),
    document.getElementById('app')
  )
});



