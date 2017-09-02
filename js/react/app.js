requirejs.config({
  baseUrl:"/js/react/comp",
    paths: {
        views: '../../views',
        "react": "//cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.min",
        "react-dom": "//cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.min"
    }
});


requirejs(['react', 'react-dom', 'landing/c.landing'], function(React, ReactDOM, Landing) {
  ReactDOM.render(
  React.createElement('div', {},
    Landing,
  ),
  document.getElementById('app')
  )
});
