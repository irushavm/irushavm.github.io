define(["react"], function (React) {
  var create = React.createElement;
  return React.createClass({
    
    propTypes: {
      title: React.PropTypes.string.isRequired,
      menuItems: React.PropTypes.object.isRequired,
    },

    createTitle: function (title) {
      return create("div", { className: "navbar-brand" },
        create("a", { className: "navbar-item is-size-4 ", }, title),
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
        create("div", {className: "navbar-end"},
          this.props.menuItems.map(function (item) {
            return create("a", {
              className: "navbar-item",
              href: item.href,
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
            right: 0,
            // borderRadius: "0px 0px 10px 10px"
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