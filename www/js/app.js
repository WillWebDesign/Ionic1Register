/**
 * @ngdoc controller
 * @name App Prueba
 * @function
 *
 * @description
 * "App de prueba" prueba de consumo de servicio para registro de usuarios
  - Validacion campos formulario,
  - Transformacion y envio de los datos para el correcto funcionamiento,
  - Mensaje de confirmacion
*/

/**
 * @ngdoc object
 * @name app.object:app
 * @function
 * @requires ionic
 * @requires ngCordova
 * @requires ngCordovaOauth
 *
 * @description
 * Se cargan todos los componentes necesarios para el correcto funcionamiento de la aplicación
*/
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
/**
  * @ngdoc function
  * @name run
  * @methodOf app.object:app
  * @param {Object} $ionicPlatform - http://ionicframework.com/docs/api/service/$ionicPlatform
  * @description Esta función se encarga de que segun la plataforma se muestre correctamente el keyboard del dispositivo.
  */
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
/**
  * @ngdoc function
  * @name config
  * @methodOf app.object:app
  * @param {Object} $state - https://github.com/angular-ui/ui-router/wiki
  * @param {Object} $state - https://github.com/angular-ui/ui-router/wiki
  * @description Esta función se encarga del ruteo del app a las distintas vistas.
  */
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/dash');

});
