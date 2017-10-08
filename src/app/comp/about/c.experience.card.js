define(["react"], function(React) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      className: React.PropTypes.string.isRequired,
      record: React.PropTypes.object.isRequired,
      style: React.PropTypes.object.isRequired,
    },
    render: function() {
      return create("div", {className: this.props.className, style: this.props.style},
        this.props.record.map(function (exp) {
          return create("div", {className: "box"},
            create("a", {className: "media", href: exp.link, target: "_blank"},
              create("div", { className: "media-left" },
                create("figure", {},
                  create("img", {src: exp.logoSrc, width: "60px" }))
              ),
              create("div", { className: "media-content" },
                create("div", {className: "content"},
                  create("a", {className: "tile is-ancestor"},
                    create("div", {className: "tile is-parent"},
                      create("div", {className: "tile is-child"},
                        create("strong", {className: "is-size-4"}, exp.place)
                      ),
                      create("div", {className: "tile is-child is-4"},
                        create("b", {className: "is-size-6", style: {marginTop: "20px" }},exp.start + " - " + exp.end)
                      )
                    ),
                  ),

                  create("a", {className: "tile is-ancestor", href: exp.link, target: "_blank", style: {marginTop: "-35px"}},
                    create("div", {className: "tile is-parent"},
                      create("div", {className: "tile is-child"},
                        create("small", {className: "is-size-6"}, "  " + exp.position),
                      )
                    )
                  ),

                  create("div", {className: "tile is-ancestor", style: {marginTop: "-10px"}},
                    create("div", {className: "tile is-parent"},
                      create("div", {}, exp.desc)
                    )
                  )

                )
              )
            )
          )
        })
      );
    }
  });
});
