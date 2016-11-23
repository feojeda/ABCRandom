'use strict';

/**
 * @ngdoc function
 * @name abcApp.controller:GeneradorCtrl
 * @description
 * # GeneradorCtrl
 * Controller of the abcApp
 */
angular.module('abcApp')
  .controller('GeneradorCtrl', function ($scope,generadorService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.abcList =  [['A','B','C','D','E'],['F','G','H','I','J'],['K','L','M','N','O'],['P','Q','R','S','T'],['U','V','X','Y','Z']];
    $scope.generadoList =  generadorService.generar();

  });
