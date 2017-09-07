define(["react", "comp/about/c.experience.card"], function (React) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
      record: React.PropTypes.array.isRequired
    },
    createLayout: function () {
      return create("div", {},
        create("div", { className: "has-text-centered", style: { paddingBottom: "25px" } }, create("strong", { className: "white-text is-size-2" }, "My Volunteer Experiences")),
        create("div", { className: "white-text is-size-3", style: { paddingBottom: "40px" } }, this.props.desc),
        create("ul", { style: { position: "relative", paddingTop: "1rem", paddingBottom: "7rem" } },
          this.props.record.map(function (exp, expIndex, arr) {
            if (!exp.place) { return create("li"); }
            return create("li", {
              className: "well-on-hover",
              style: (expIndex % 2 === 0) ? {
                textAlign: "right",
                width: " 30%",
                marginLeft: "17%",
                padding: "10px",
                marginBottom: "3rem"
              } : {
                  marginLeft: "53%",
                  wdith: "100%",
                  position: "absolute",
                  width: "30%",
                  padding: "10px",
                },
            }, create("a", { className: "no-hover", href: exp.link, target: "_blank" },
              create("strong", { className: "is-size-5" }, exp.place),
              create("div", {}, create("strong", {}, exp.position)),
              create("div", {}, exp.start + (!exp.end ? "" : " - " + exp.end))
            )
            )
          })
        )
      );
    },

    render: function () {
      return create("section", {
        id: "about-vol",
        className: "hero",
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
