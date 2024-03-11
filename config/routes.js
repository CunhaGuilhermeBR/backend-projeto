module.exports.routes = {
   //Games
  'get /games': 'GamesController.getAll',
  'get /gamesById/:id': 'GamesController.getById',
  'get /releases': 'GamesController.getReleases',
  //Users
  'post /login': 'UsersController.login',
  'post /generateToken': 'UsersController.generateToken',
  'post /resetPassword': 'UsersController.resetPassword'
  
};
