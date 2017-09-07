define(["react"], function (React) {
  var create = React.createElement;
  return React.createClass({

    propTypes: {
      title: React.PropTypes.string.isRequired,
      menuItems: React.PropTypes.object.isRequired,
    },

    createTitle: function (title) {
      return create("div", { className: "navbar-brand" },
        create("span", { style: { margin: "10px" } }),
        create("a", { className: "navbar-item is-size-4 ", href: "#page-top" }, title),
        create("a", { className: "navbar-item is-hidden-mobile", href: "https://github.com/irushavm", target: "_blank" },
          create("i", { className: "fa fa-github is-size-3" })
        ),
        create("span", { style: { margin: "10px" } }),
        create("a", { className: "navbar-item is-hidden-mobile", href: "https://www.linkedin.com/in/irushavm/", target: "_blank" },
          create("i", { className: "fa fa-linkedin is-size-3" })
        ),
        create("span", { style: { margin: "10px" } }),
        create("a", { className: "navbar-item is-hidden-mobile", href: "mailto:irusha@vidanamadura.net" },
          create("i", { className: "fa fa-envelope is-size-3" })
        ),
        this.createMobileMenu());
    },

    createMobileMenu: function () {
      var span = create("span");
      return create("span", {
        className: "navbar-burger",
        onClick: function () {
          document.getElementById("navbar-menu").classList.toggle("is-active");
        }
      }, span, span, span);
    },

    createMenuItems: function () {
      return create("div", {
        id: "navbar-menu",
        className: "navbar-menu"
      },
        create("div", { className: "navbar-end" },
          this.props.menuItems.map(function (item) {
            if (item.dropdown) {
              return create("div", { className: "navbar-item is-size-5 has-dropdown is-hoverable" },
                create("a", {
                  className: "navbar-link",
                  href: item.href,
                  onClick: function () {
                    document.getElementById("navbar-menu").classList.toggle("is-active");
                  }
                }, item.text),
                create("div", { className: "navbar-dropdown is-boxed is-right" },
                  item.dropdown.map(function (dropItem) {
                    return create("a", {
                      className: "navbar-item is-size-5",
                      href: dropItem.href,
                      onClick: function () {
                        document.getElementById("navbar-menu").classList.toggle("is-active");
                      }
                    }, dropItem.text)
                  })
                )
              )
            }
            return create("a", {
              className: "navbar-item is-size-5",
              href: item.href,
              onClick: function () {
                document.getElementById("navbar-menu").classList.toggle("is-active");
              }
            }, item.text)
          })
        )
      )
    },

    render: function () {
      return create("div", { className: "hero-head" },
        create("div", {
          className: "navbar",
          style: {
            position: "fixed",
            zIndex: 100,
            top: 0,
            left: 0,
            right: 0
          }
        }, create("div", { className: "container" },
          this.createTitle(this.props.title),
          this.createMenuItems()
        )
        )
      );
    }
  });
});