var Esc_Jeopardy = angular.module('Esc_Jeopardy', [
  'ngRoute',
  'cfp.hotkeys',
  'xeditable',
  'LocalStorageModule',
  'ESC_JeopardyControllers'
]);


Esc_Jeopardy.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/bootup', {
        templateUrl: 'partials/bootup.html',
        controller: 'Bootup'
      }).
      when('/board', {
        templateUrl: 'partials/board.html',
        controller: 'LoadBoard'
      }).
      when('/answer/:catId/:questionId', {
        templateUrl: 'partials/answer.html',
        controller: 'LoadQuestion'
      }).
      when('/question/:catId/:questionId', {
        templateUrl: 'partials/question.html',
        controller: 'LoadQuestion'
      }).
      when('/player/:playerId', {
        templateUrl: 'partials/player_setup.html',
        controller: 'LoadPlayerSetup'
      }).
      otherwise({
        redirectTo: '/board'
      });
  }
]);