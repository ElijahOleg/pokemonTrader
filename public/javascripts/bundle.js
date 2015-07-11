angular.module("pokemonApp", ['ui.router']);


angular.module("pokemonApp")

  .config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/index.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/login.html'
    })
    .state('allPokemon', {
      url: '/allpokemon',
      templateUrl: '/views/allPokemon.html'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/views/profile.html'
    })
    .state('myPokemon', {
      url: '/myPokemon',
      templateUrl: '/views/myPokemon.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: '/views/settings.html'
    })
    .state('addPokemon', {
      url: '/addPokemon',
      templateUrl: '/views/addPokemon.html'
    })
    .state('onePokemon', {
      url: '/onePokemon',
      templateUrl: '/views/home/onePokemon.html'
    });
  // .state('user', {
  // 	url: '',
  // 	templateUrl: '/views/users/user.html',
  // 	abstract: true
  // })
  // .state('user.register', {
  // 	url: '/register',
  // 	templateUrl: '/views/users/users.html',
  // 	controller: 'UsersCtrl'
  // })
  // .state('user.login', {
  // 	url: '/login',
  // 	templateUrl: '/views/users/users.html',
  // 	controller: 'UsersCtrl'
  // });
});


