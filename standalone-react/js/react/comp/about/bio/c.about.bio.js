define(["react"], function(React) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
    },

    render: function() {
      return create("section", {
        id: "about",
        className: "hero is-info",
        style: {
          backgroundColor: "#318fed"
        }
      },create("div", {className: "hero-body"},
          create("div", {className: "container has-text-centered"},
          create("div", { className: "has-text-centered", style: { paddingBottom: "25px" } }, create("strong", { className: "is-size-2" }, "About Me")),
          create("h1", {className: "column is-size-4", style: {paddingBottom: "40px"}}, this.props.desc)
            )
        )
      );
    }
  })
});
