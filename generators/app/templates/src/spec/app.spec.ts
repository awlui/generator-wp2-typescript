import {expect} from 'chai';
import {App} from '../index';
// import * as Bar from '../bar';
describe('Demo', () => {
  it('should add correctly', () => {
    var k = new App('andy');
    k.met();
    expect(10).to.equal(10);
  });
  it('blah', () => {
    var z = new App('Andy');
    z.arrange()
    z.package(11);
    z.untested();
  })
});