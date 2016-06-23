export default class HelloController {
  constructor(HelloService, HelloConstants) {
    this.name = 'HelloController';
    this.service = HelloService;
    this.constants = HelloConstants;
  }

  say() {
    return this.constants.word;
  }
}
