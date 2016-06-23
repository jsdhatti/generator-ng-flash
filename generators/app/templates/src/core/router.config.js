export function configuration($urlRouterProvider) {
  $urlRouterProvider.otherwise('/hello');
}

export function routingEvents($rootScope) {

  let notFound = $rootScope.$on('$stateNotFound',
    (/*event, unfoundState, fromState, fromParams*/) => {

    });

  let onError = $rootScope.$on('$stateChangeError',
    (/*event, toState, toParams, fromState, fromParams, error*/) => {

    });

  let onSuccess = $rootScope.$on('$stateChangeStart',
    (/*event, toState, toParams, fromState, fromParams*/) => {

    });

  $rootScope.$on('$destroy', notFound);
  $rootScope.$on('$destroy', onError);
  $rootScope.$on('$destroy', onSuccess);
}
