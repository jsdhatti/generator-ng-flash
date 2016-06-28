export default class <%= capitalName %>Controller {
  constructor(<%= capitalName %>Service, <%= capitalName %>Constants) {
    this.name = '<%= capitalName %>Controller';
    this.service = <%= capitalName %>Service;
    this.constants = <%= name %>Constants;
  }
}
