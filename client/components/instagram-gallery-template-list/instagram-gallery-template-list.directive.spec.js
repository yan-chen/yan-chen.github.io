'use strict';

describe('Directive: instagramGalleryTemplateList', function () {

  // load the directive's module and view
  beforeEach(module('yyPageApp'));
  beforeEach(module('components/instagram-gallery-template-list/instagram-gallery-template-list.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<instagram-gallery-template-list></instagram-gallery-template-list>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the instagramGalleryTemplateList directive');
  }));
});