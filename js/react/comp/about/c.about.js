define(["react", "./c.about.experience"], function(React,experienceCard) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      bio: React.PropTypes.string.isRequired,
      exp: React.PropTypes.array.isRequired
    },
    createLayout: function() {
      return create("div", {className: "columns"},
        create("div", {className: "column"},create("h1", {className: "is-size-4"}, this.props.bio)),
        create("div", {className: "column"},
          create(experienceCard, {exp: this.props.exp})
          )
      )
    },

    render: function() {
      return create("section", {
        id: "about",
        className: "hero is-info"
      },create("div", {className: "hero-body"},
          create("div", {className: "container"},
            create("h1", {className: "is-size-2 has-text-centered is-bold", style: {paddingBottom: "25px"}}, "About Me"),
            this.createLayout()
            )
        )
      );
    }
  })
});
