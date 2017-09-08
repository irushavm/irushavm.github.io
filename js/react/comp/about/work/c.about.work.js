define(["react", "comp/about/c.experience.card"], function (React, experienceCardList) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
      record: React.PropTypes.array.isRequired
    },
    createLayout: function () {
      return create("div", { style: { paddingBottom: "2rem" } },
      create("div", { className: "has-text-centered", style: { paddingBottom: "25px" } }, create("strong", { className: "is-size-2" }, "My Work Experiences")),
        create("div", { className: "tile is-ancestor" },
          create("div", { className: "tile is-6 is-vertical is-parent" },
            create("h1", { className: "tile is-child" }),
            create("h1", { className: "tile is-child is-size-3 ", style: { paddingBottom: "40px" } }, this.props.desc),
            create("h1", { className: "tile is-child" })
          ),
          create("div", { className: "tile is-6 is-vertical is-parent" },
            create(experienceCardList, { className: "tile is-child", record: this.props.record })
          )
        )
      )
    },

    render: function () {
      return create("section", {
        id: "about-work",
        className: "hero is-info",
        style: {
          backgroundColor: "#23af7e"
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
