'use strict';

describe('Controller: GeneradorCtrl', function () {

  // load the controller's module
  beforeEach(module('abcApp'));

  var GeneradorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneradorCtrl = $controller('GeneradorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneradorCtrl.awesomeThings.length).toBe(3);
  });
});
