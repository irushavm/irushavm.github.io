define(["react", "./c.landing.header", "./c.landing.body", "./c.landing.footer"], function(React, header,body,footer) {
  var create = React.createElement;

  var Navbar = create("div", {
    className: "hero-head"
  });
  return create("section", {
    className: "hero is-info is-large"
  },create(header, {title: "Irusha Vidanamadura"}), body, footer);

});
