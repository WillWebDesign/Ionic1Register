angular.module('starter.services', [])
/**
* @ngdoc function
* @name starterService
* @methodOf app.object:app
* @param {Object} $http - https://docs.angularjs.org/api/ng/service/$http
* @param {Object} $q - https://docs.angularjs.org/api/ng/service/$q
* @description Esta función se encarga de resivir la informacion transformala y enviarla al endpoint segun la respuesta que resiva.
*/
.factory('starterService',['$http', '$q' ,function($http, $q) {
    function save(data) {
      data.callback = 'null';
      var deferred = $q.defer();
      var uriData = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
      }).join('&');
      $http.post(
        'http://192.169.155.98:5001//GiveAdminService/GiveParking_AdminService.asmx/P_AdminRegistrarUsuario',
        uriData,
        {
          headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      .then(function (data) {
        deferred.resolve(data);
      })
      .catch(function (error) {
        deferred.reject(error);
      });

      return deferred.promise;
    }
  return {
    save : save
  };
}]);
