'use strict';

describe('Directive: instagramGalleryTemplate', function () {

  // load the directive's module and view
  beforeEach(module('yyPageApp'));
  beforeEach(module('components/instagram-gallery-template/instagram-gallery-template.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<instagram-gallery-template></instagram-gallery-template>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the instagramGalleryTemplate directive');
  }));
});
