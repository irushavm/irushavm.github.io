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
//   <!-- Hero content: will be in the middle -->
//   <div class="hero-body">
//     <div class="container has-text-centered">
//       <h1 class="title">
//         Title
//       </h1>
//       <h2 class="subtitle">
//         Subtitle
//       </h2>
//     </div>
//   </div>
//
//   <!-- Hero footer: will stick at the bottom -->
//   <div class="hero-foot">
//     <nav class="tabs is-boxed is-fullwidth">
//       <div class="container">
//         <ul>
//           <li class="is-active"><a>Overview</a></li>
//           <li><a>Modifiers</a></li>
//           <li><a>Grid</a></li>
//           <li><a>Elements</a></li>
//           <li><a>Components</a></li>
//           <li><a>Layout</a></li>
//         </ul>
//       </div>
//     </nav>
//   </div>
// </section>
