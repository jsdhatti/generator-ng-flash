import CoreModule from '../src/core/core.js';
import HelloModule from '../src/components/hello/hello.js';
import HelloController from '../src/components/hello/hello.controller.js';
import HelloComponent from '../src/components/hello/hello.component.js';
import HelloTemplate from '../src/components/hello/hello.html';
import HelloService from '../src/components/hello/hello.service.js';
import HelloConstants from '../src/components/hello/hello.constants.js';

describe('Hello', () => {
  let makeController;

  beforeEach(angular.mock.module(CoreModule));  // eslint-disable-line
  beforeEach(angular.mock.module(HelloModule));  // eslint-disable-line
  beforeEach(inject(($http) => {
    makeController = () => {
      return new HelloController(new HelloService($http), HelloConstants);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name/from/schema/model property', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.not.be.undefined;
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has schema/form/model in template', () => {
      // expect(HelloTemplate).to.match(/\s?vm\.schema\s?/g);
    });
  });


  describe('Component', () => {
    // component/directive specs
    let component = HelloComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(HelloTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HelloController);
    });
  });

});
