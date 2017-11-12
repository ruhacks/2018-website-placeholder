module.exports = function (app) {
  // route set up
  app.set('views', 'public/views');
  app.set('view engine', 'pug');

  app.get('/', (req, res) => {
    res.render('index');
  });
};
