define(["react"], function (React, ) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
      record: React.PropTypes.array.isRequired
    },
    createLayout: function () {
      var recordGrid = [[]];
      this.props.record.forEach(function (rec, ind) {
        var index = Math.floor(ind / 3);
        recordGrid[index] = recordGrid[index] || [];
        recordGrid[index].push(rec);
      });
      var paddingElementCount = recordGrid[recordGrid.length - 1].length % 3;
      if (paddingElementCount !== 0) {
        while (paddingElementCount % 3 !== 0) {
          recordGrid[recordGrid.length - 1].push({})
          paddingElementCount++;
        }
      }
      return create("div", {},
        create("div", { className: "has-text-centered", style: { paddingBottom: "25px" } }, create("strong", { className: "is-size-2" }, "My Projects")),
        create("h1", { className: "is-size-4 has-text-centered", style: { paddingBottom: "40px" } }, this.props.desc),
        create("div", {},
          recordGrid.map(function (expRow) {
            return create("div", { className: "columns" },
              expRow.map(function (exp, expInd) {
                if (!exp.name) { return create("div", {className: "column " + expInd }); }
                return create("div", { className: "column" },
                  create("div", { className: "card has-text-centered", style: { margin: "25px" } },
                    create("div", { className: "card-image", style: { width: "400px" } },
                      create("div", { className: "image is-3by2" },
                        create("img", { src: exp.imgSrc })
                      )
                    ),
                    create("div", { className: "card-content" },
                      create("div", { className: "content" },
                        create("div", { className: "is-size-4" }, exp.name),
                        create("div", { className: "is-size-6" }, exp.desc)
                      )
                    )
                  )
                )
              })
            )
          })
        )
      )
    },

    render: function () {
      return create("section", {
        id: "projects",
        className: "hero is-success",
        style: {
          backgroundColor: "#e04e4e"
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
