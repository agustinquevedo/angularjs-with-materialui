var app = angular.module('App', ['ngMaterial', 'ngRoute','ngMessages'])
// Configuracion de paleta de colores
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('indigo')
      .accentPalette('blue')
      .warnPalette('blue-grey')
      .backgroundPalette('grey')
  })
// Configuracion de rutas
app.config(function($routeProvider){
    $routeProvider
    .when("/gestiondegrupos", {
        templateUrl : "./views/gestiondegrupos.html"
    })
})

// Dialog Modal Controller

.controller('modalController', function($scope, $mdDialog) {
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.showDialog = function(ev) {
      $mdDialog.show({
        contentElement: '#myDialog',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        escapeToClose: true,
        // openFrom: ({
        //     top: 0,
        //     width: 30,
        //     height: 80,
        //     }),
        closeTo:({
            left: 1500
            }),
        controller: hideDialog,
      });
    };
    // Function o Controller para cerrar el Dialog Modal
    function hideDialog($scope, $mdDialog) {
        $scope.closeDialog = function() {
            $mdDialog.hide();
        };
    };
    // Opcion 2
    // function DialogController($scope, $mdDialog) {
    //     $scope.hide = function() {
    //       $mdDialog.hide();
    //     };
    
    //     $scope.cancel = function() {
    //       $mdDialog.cancel();
    //     };
    
    //     $scope.answer = function(answer) {
    //       $mdDialog.hide(answer);
    //     };
    //   }
   
  });

 