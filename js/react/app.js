requirejs.config({
  baseUrl:"/js/react/comp",
    paths: {
        "react": "//cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min",
        "react-dom": "//cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min"
    }
});

requirejs([
  'react',
  'react-dom',
  'landing/c.landing',
  'about/c.about'  
], function(React, ReactDOM, LandingSection, AboutSection) {
  ReactDOM.render(
    React.createElement('div', {},
      LandingSection,
      React.createElement(AboutSection, {
        bio: "I am currently pursuing my undergrad in Computer Systems " +
        "Engineering at Carleton. I am also an active member at the IEEE " +
        "Student branch at Carleton helping organize network-based events, " +
        "social events, school workshops, and school competitions.",
        exp: [
          { 
            "logoSrc": "https://pbs.twimg.com/profile_images/876115785466466304/sE4r6qaA_400x400.jpg",
            "place": "Klipfolio",
            "link": "https://www.klipfolio.com/",
            "position": "Software Developer (Co-op)",
            "start": "May 2017",
            "end": "Aug 2017",
            "desc": "Developing and improving the Klipfolio product and user journey guide."    
          },
          { 
            "logoSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blackberry_Logo_without_wordmark.svg/1280px-Blackberry_Logo_without_wordmark.svg.png",
            "place": "BlackBerry Limited",
            "link": "https://ca.blackberry.com/qnx-radar/trailer-chassis-and-container-tracking/",
            "position": "Full Stack Developer Student",
            "start": "Sept 2016",
            "end": "Dec 2016",
            "desc": "Bug-fixing, automated testing, and feature development for the BlackBerry Radar platform."    
          }
          ,{ 
            "logoSrc": "https://pbs.twimg.com/profile_images/876115785466466304/sE4r6qaA_400x400.jpg",
            "place": "Klipfolio",
            "link": "https://www.klipfolio.com/",
            "position": "Software Developer (Co-op)",
            "start": "May 2017",
            "end": "Aug 2017",
            "desc": "Developing and improving the Klipfolio product and user journey guide"    
          }
          ,{ 
            "logoSrc": "https://pbs.twimg.com/profile_images/876115785466466304/sE4r6qaA_400x400.jpg",
            "place": "Klipfolio",
            "link": "https://www.klipfolio.com/",
            "position": "Software Developer (Co-op)",
            "start": "May 2017",
            "end": "Aug 2017",
            "desc": "Developing and improving the Klipfolio product and user journey guide"    
          }
        ]
      })
    ),
    document.getElementById('app')
  )
});
