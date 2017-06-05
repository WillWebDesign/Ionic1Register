angular.module('starter.controllers', [])

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
