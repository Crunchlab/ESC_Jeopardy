var Esc_JeopardyFactories = angular.module('Esc_JeopardyFactories', ['Esc_JeopardyFactories']);

Esc_JeopardyFactories.factory('userService', ['$rootScope', function ($rootScope) {
  var service = {
    model: {
      name: '',
      score: ''
    },

    SaveState: function () {
      sessionStorage.userService = angular.toJson(service.model);
    },

    RestoreState: function () {
      service.model = angular.fromJson(sessionStorage.userService);
    }
  }

  $rootScope.$on("savestate", service.SaveState);
  $rootScope.$on("restorestate", service.RestoreState);

  return service;
}]);