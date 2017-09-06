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
  'about/c.about',
  'project/c.project'
], function(React, ReactDOM, LandingSection, AboutSection, ProjectSection) {
  ReactDOM.render(
    React.createElement('div', {},
    [
      LandingSection,
      React.createElement(AboutSection, aboutConstants),
      React.createElement(ProjectSection),
    ]
    ),
    document.getElementById('app')
  )
});



var aboutConstants = {
  bio: "I am currently pursuing my undergrad in Computer Systems " +
  "Engineering at Carleton. I am also an active member at the IEEE " +
  "Student branch at Carleton helping organize network-based events, " +
  "social events, school workshops, and school competitions.",
  workExp: {
    title: "Work Experience",
    record: [
      {
        "logoSrc": "https://pbs.twimg.com/profile_images/876115785466466304/sE4r6qaA_400x400.jpg",
        "place": "Klipfolio",
        "link": "https://www.klipfolio.com/",
        "position": "Software Developer (Co-op)",
        "start": "May 2017",
        "end": "Aug 2017",
        "desc": "Developing and improving the Klipfolio product and user journey guide"
      },
      {
        "logoSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blackberry_Logo_without_wordmark.svg/1280px-Blackberry_Logo_without_wordmark.svg.png",
        "place": "BlackBerry Limited",
        "link": "https://ca.blackberry.com/qnx-radar/trailer-chassis-and-container-tracking/",
        "position": "Full Stack Developer Student",
        "start": "Sept 2016",
        "end": "Dec 2016",
        "desc": "Bug-fixing, automated testing, and feature development for the BlackBerry Radar platform"
      }
      ,{
        "logoSrc": "http://geeknewscentral.com/wp-content/uploads/2016/03/QNX-logo-300x300.jpg",
        "place": "QNX Software Systems",
        "link": "http://www.qnx.com/content/qnx/en.html",
        "position": "Embedded BSP Roadmap Student",
        "start": "May 2016",
        "end": "Aug 2016",
        "desc": "Using Coccinelle to migrate platform specific drivers to use a new set of hardware APIs"
      }
      ,{
        "logoSrc": "https://pbs.twimg.com/profile_images/518145159796502528/rmPoTbqb_400x400.jpeg",
        "place": "Macadamian",
        "link": "http://www.macadamian.com/",
        "position": "Dev Student",
        "start": "Jan 2016",
        "end": "Apr 2016",
        "desc": "Developing a scalable IoT platform using Loopback, Ionic, and third party products"
      }
    ]
  },
  volExp: {
    title: "Volunteer Experience",
    record: [
      {
        "logoSrc": "https://pbs.twimg.com/profile_images/876115785466466304/sE4r6qaA_400x400.jpg",
        "place": "IEEE Carleton Univerity Student Branch",
        "link": "https://www.klipfolio.com/",
        "position": "Branch Chair",
        "start": "May 2017",
        "end": "Apr 2018",
        "desc": "Developing and improving the Klipfolio product and user journey guide"
      },
      {
        "logoSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Blackberry_Logo_without_wordmark.svg/1280px-Blackberry_Logo_without_wordmark.svg.png",
        "place": "BlackBerry Limited",
        "link": "https://ca.blackberry.com/qnx-radar/trailer-chassis-and-container-tracking/",
        "position": "Full Stack Developer Student",
        "start": "Sept 2016",
        "end": "Dec 2016",
        "desc": "Bug-fixing, automated testing, and feature development for the BlackBerry Radar platform"
      }
      ,{
        "logoSrc": "http://geeknewscentral.com/wp-content/uploads/2016/03/QNX-logo-300x300.jpg",
        "place": "QNX Software Systems",
        "link": "http://www.qnx.com/content/qnx/en.html",
        "position": "Embedded BSP Roadmap Student",
        "start": "May 2016",
        "end": "Aug 2016",
        "desc": "Using Coccinelle to migrate platform specific drivers to use a new set of hardware APIs"
      }
      ,{
        "logoSrc": "https://pbs.twimg.com/profile_images/518145159796502528/rmPoTbqb_400x400.jpeg",
        "place": "Macadamian",
        "link": "http://www.macadamian.com/",
        "position": "Dev Student",
        "start": "Jan 2016",
        "end": "Apr 2016",
        "desc": "Developing a scalable IoT platform using Loopback, Ionic, and third party products"
      }
    ]
  }
};
