exports.config = {
  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] }
  },

  npm: {
    enabled: true,
    styles: {
      bootstrap: ['dist/css/bootstrap.css']
    },
    globals: {
      process: 'process'
    },
    aliases: {
      'redux-saga/effects': 'redux-saga/lib/effects'
    }
  }
};
