define(["react"], function(React,) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      bio: React.PropTypes.string.isRequired,
      exp: React.PropTypes.array.isRequired
    },
    createLayout: function() {
      return create("div", {},
        create("h1", {className: "is-size-2 has-text-centered is-bold", style: {paddingBottom: "25px"}}, "About Me"),
        create("div", { className: "columns"},
          create("h1", {className: "column is-size-4", style: {paddingBottom: "40px"}}, this.props.bio),
          create(experienceCardList, { className: "column", title: this.props.workExp.title, exp: this.props.workExp.record})
        )
      )
    },

    render: function() {
      return create("section", {
        id: "about",
        className: "hero is-success"
      },create("div", {className: "hero-body", style: {backgroundColor: "#F7B722"}},
          create("div", {className: "container"},
            // this.createLayout()
            )
        )
      );
    }
  })
});
