'use strict';

/**
 * @ngdoc service
 * @name abcApp.generadorService
 * @description
 * # generadorService
 * Service in the abcApp.
 */
angular.module('abcApp')
  .service('generadorService', function () {
    this.generar = function () {
      var result = [['A','B','C','D','E'],['F','G','H','I','J'],['K','L','M','N','O'],['P','Q','R','S','T'],['U','V','X','Y','Z']];
      var opt = ['I','D',"J"];
      for(var i = 0; i < result.length;i++) {
        var line = result[i];
        var count = [0,0,0];
        for(var j = 0; j < line.length;j++) {
          var indi = Math.round(Math.random()*2);
          if(count[indi] == 2) {
            count[indi] = 0;
            indi = (indi+1)%3;
          }
          count[indi]++;
          console.log(indi);
          result[i][j] = opt[indi];
        }
      }

      return result;
    }

  });
