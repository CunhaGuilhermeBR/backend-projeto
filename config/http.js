module.exports.http = {
  middleware: {
    order: [
      'morgan',
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'helmet',
      'router',
      'www',
      'favicon',
    ],

    morgan: require('morgan')('dev'),
    helmet: require('helmet')(),
   
  },
};
