import CoreModule from '../src/core/core.js';
import HomeModule from '../src/components/home/home.js';
import HomeController from '../src/components/home/home.controller.js';
import HomeComponent from '../src/components/home/home.component.js';
import HomeTemplate from '../src/components/home/home.html';

describe('Home', () => {
  let makeController;

  beforeEach(angular.mock.module(CoreModule));  // eslint-disable-line
  beforeEach(angular.mock.module(HomeModule));  // eslint-disable-line
  beforeEach(inject(() => {
    makeController = () => {
      return new HomeController();
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
      // expect(HomeTemplate).to.match(/\s?vm\.schema\s?/g);
    });
  });


  describe('Component', () => {
    // component/directive specs
    let component = HomeComponent;

    it('includes the intended template',() => {
      expect(component.template).to.equal(HomeTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(HomeController);
    });
  });

});
