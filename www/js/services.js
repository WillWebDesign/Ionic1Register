angular.module('starter.services', [])

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
