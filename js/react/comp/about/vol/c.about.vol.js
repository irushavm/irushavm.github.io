define(["react", "comp/about/c.experience.card"], function (React) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
      record: React.PropTypes.array.isRequired
    },
    createLayout: function () {
      var volRecords = [];
      for (var i = 0; i < this.props.record.length; i += 2) {
        volRecords.push([this.props.record[i], this.props.record[i + 1]]);
      }
      return create("div", {},
        create("div", { className: "has-text-centered", style: { paddingBottom: "25px" } }, create("strong", { className: "white-text is-size-2" }, "My Volunteer Experiences")),
        create("div", { className: "white-text is-size-4 has-text-centered", style: { paddingBottom: "40px" } }, this.props.desc),
        create("div", { className: "container", style: { width: "50%", paddingTop: "1rem" } },
          volRecords.map(function (volRecordSet) {
            return create("div", { className: "columns" },
              volRecordSet.map(function (vol, index) {
                if (!vol) { return create("div", { className: "column" }) }
                return create("div", {
                  className: "column well-on-hover",
                  style: {
                    textAlign: (index % 2 === 0) ? "right" : "left",
                    padding: "20px",
                  }
                }, create("a", { className: "no-hover", href: vol.link, target: "_blank" },
                  create("strong", { className: "is-size-5" }, vol.place),
                  create("div", {}, create("strong", {}, vol.position)),
                  create("div", {}, vol.start + (!vol.end ? "" : " - " + vol.end))
                )
                )
              })
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
