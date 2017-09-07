define(["react"], function (React, ) {
  var create = React.createElement;

  return React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired,
      record: React.PropTypes.array.isRequired
    },

    render: function () {
      return create("div", {
        className: "footer",
        style: {
          backgroundColor: "#363636"
        }
      }, create("div", { className: "container" },
        create("div", { className: "content has-text-centered" },
          create("p", { style: { color: "#fff" } },
            "Website created by ",
            create("strong", { style: { color: "#fff" } }, "Irusha Vidanamadura")
          ),
          create("a", { className: "icon", href: "https://github.com/irushavm", target: "_blank" },
            create("i", { className: "fa fa-github is-size-3" })
          ),
          create("span", { style: { margin: "10px" } }),
          create("a", { className: "icon", href: "https://www.linkedin.com/in/irushavm/", target: "_blank" },
            create("i", { className: "fa fa-linkedin is-size-3" })
          ),
          create("span", { style: { margin: "10px" } }),
          create("a", { className: "icon", href: "mailto:irusha@vidanamadura.net" },
            create("i", { className: "fa fa-envelope is-size-3" })
          )
        )
      )
      );
    }
  })
});
