module.exports.routes = {
  'get /games': 'GamesController.getAll',
  'get /gamesById/:id': 'GamesController.getById',
  'post /login': 'UsersController.login'

};
