define(["react"], function (React) {
  var create = React.createElement;
  return React.createClass({
    propTypes: {
      "title": React.PropTypes.string.isRequired,
      "subtitle": React.PropTypes.string.isRequired,
      "message": React.PropTypes.string.isRequired,
      "profile": React.PropTypes.object.isRequired,
    },


    render: function () {
      return create("section", { className: "hero is-medium is-dark", style: { backgroundColor: "#373737" } },
        create("div", { className: "hero-body", style: { paddingTop: "8rem", paddingBottom: "8rem" } },
          create("div", { className: "container has-text-centered" },
            create("img", { src: this.props.profile.href, style: { border: "15px solid #222", borderRadius: "50%", width: "300px", marginBottom: 50 } }),
            create("h1", { className: "title" }, this.props.title),
            create("h2", { className: "subtitle" }, this.props.subtitle),
            create("p", { className: "is-size-4" }, this.props.message)
          )
        )
      )
    }

  });
});