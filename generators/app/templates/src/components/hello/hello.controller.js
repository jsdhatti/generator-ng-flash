export default class HelloController {
  constructor(HelloService, helloConstants) {
    this.name = 'HelloController';
    this.service = HelloService;
    this.constants = helloConstants;
  }
}
