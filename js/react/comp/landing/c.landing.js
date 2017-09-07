define(["react", "./c.landing.header", "./c.landing.body"], function (React, header, body) {
  var create = React.createElement;

  var Navbar = create("div", {
    className: "hero-head"
  });
  return create("section", {
  },
    create(header, {
      title: "Irusha Vidanamadura",
      menuItems: [
        {
          text: "Home",
          href: "#page-top"
        },
        {
          text: "About Me",
          href: "#about",
          dropdown: [
            {
              text: "Work Experience",
              href: "#about-work"
            },
            {
              text: "Volunteering",
              href: "#about-vol"
            }
          ]
        },
        {
          text: "Projects",
          href: "#projects"
        }
      ]
    }),
    create(body, {
      "profile": {
        "href": "https://avatars1.githubusercontent.com/u/3733412?v=4&u=cae78efff6eda2338012d56a6854ab3f6b32dbf0&s=400"
      },
      "title": "Fourth Year Computer Systems Engineering Student",
      "subtitle": "Carleton Univeristy",
      "message": "Experience in Embedded Systems, Web Development, Hobbist PCB Design, and Graphics Design"
    }));

});
