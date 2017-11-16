import {DemoApp} from '../src/index';
describe('Demo', () => {
  var k: any;
  beforeEach(() => {
    k = new DemoApp('andy');
  });
  it('Testing the first dummy method', () => {
    expect(k.dummyMethod()).toEqual('First Test');
  });
  it('Testing the second dummy method', () => {
    expect(k.dummyMethod2()).toEqual('Second Test');
  })
});
