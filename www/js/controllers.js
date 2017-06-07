angular.module('starter.controllers', [])
/**
* @ngdoc function
* @name DashCtrl
* @methodOf app.object:app
* @param {Object} $ionicPopup - http://ionicframework.com/docs/api/service/$ionicPopup
* @param {Object} $http - https://docs.angularjs.org/api/ng/service/$http
* @param {Object} $q - https://docs.angularjs.org/api/ng/service/$q
* @description Esta función es la primera que se carga al abrir la aplicación donde muestra los campos y es la que envia la informacion a el servicio.
*/

.controller('DashCtrl',['$scope', '$ionicPopup' ,'starterService',function($scope,$ionicPopup,starterService) {
  $scope.registro = {};
  $scope.register = function () {
    starterService.save($scope.registro);
    $ionicPopup.alert({
      title: 'Notificación',
      template: 'Registro Completado'
    });
    // .then(function (data){
    //   $ionicPopup.alert({
    //     title: 'Notificación',
    //     template: 'Registro Completado'
    //   });
    // })
    // .catch(function (error) {
    //   $ionicPopup.alert({
    //     title: 'Notificación',
    //     template: error
    //   });
    // });
  }
}]);
