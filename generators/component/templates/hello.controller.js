export default class <%= capitalName %>Controller {
  constructor(<%= capitalName %>Service, <%= name %>Constants) {
    this.name = '<%= capitalName %>Controller';
    this.service = <%= capitalName %>Service;
    this.constants = <%= name %>Constants;
  }

  say() {
    return this.constants.word;
  }
}
