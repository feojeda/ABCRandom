'use strict';

describe('Service: generadorService', function () {

  // load the service's module
  beforeEach(module('abcApp'));

  // instantiate service
  var generadorService;
  beforeEach(inject(function (_generadorService_) {
    generadorService = _generadorService_;
  }));

  it('should do something', function () {
    expect(!!generadorService).toBe(true);
  });

});
