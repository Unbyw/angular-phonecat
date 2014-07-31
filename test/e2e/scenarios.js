'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

});

describe('PhoneCat App', function() {

    describe('Phone list view', function() {

        beforeEach(function() {
            browser.get('app/index.html');
        });

        it('should render phone specific links', function() {
            var query = element(by.model('query'));
            query.sendKeys('nexus');
            element.all(by.css('.phones li a')).first().click();
            browser.getLocationAbsUrl().then(function(url) {
                expect(url.split('#')[1]).toBe('/phones/nexus-s');
            });
        });

    });
});
