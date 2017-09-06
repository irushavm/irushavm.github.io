define(["react", "comp/about/c.experience.card"], function (React) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
      record: React.PropTypes.array.isRequired
    },
    createLayout: function () {
      return create("div", {},
        create("div", { className: "has-text-centered", style: { paddingBottom: "25px" } }, create("strong", { className: "is-size-2" }, "My Volunteer Experiences")),
        create("h1", { className: "is-size-3", style: { paddingBottom: "40px" } }, this.props.desc),
        create("ul", { style: { position: "relative", paddingTop: "1rem", paddingBottom: "7rem" } },
          this.props.record.map(function (exp, expIndex, arr) {
            if (!exp.place) { return create("li"); }
            return create("li", {
              style: (expIndex % 2 === 0) ? {
                textAlign: "right",
                width: " 47%",
                marginBottom: "2rem"
              } : {
                  marginLeft: "53%",
                  position: "absolute"
                },
            }, create("a", { href: exp.link, target: "_blank" },
              create("strong", { className: "is-size-5" }, exp.place)
            ),
              create("div", {}, create("strong", {}, exp.position)),
              create("div", {}, exp.start + "-" + exp.end)
            )
          })
        )
      );
    },

    render: function () {
      return create("section", {
        id: "about",
        className: "hero is-info",
        style: {
          backgroundColor: "#eda131"
        }
      }, create("div", { className: "hero-body" },
        create("div", { className: "container" },
          this.createLayout()
        )
      )
      );
    }
  })
});
