import {expect} from 'chai';
import {DemoApp} from '../src/index';
describe('Demo', () => {
  var k: any;
  beforeEach(() => {
    k = new DemoApp('andy');
  })
  it('Testing the first dummy method', () => {
    expect(k.dummyMethod()).to.equal('First Test');
  });
  it('Testing the second dummy method', () => {
    expect(k.dummyMethod2()).to.equal('Second Test');
  })
});
