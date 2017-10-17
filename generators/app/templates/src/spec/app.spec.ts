import {expect} from 'chai';
import {DemoApp} from '../index';
describe('Demo', () => {
  it('should add correctly', () => {
    var k = new DemoApp('andy');
    expect(k.dummyMethod()).to.equal('Demo Result');
  });

});