configs.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    views: {
      'content': {
        templateUrl: 'templates/home.html',
        controller: 'TaskCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
