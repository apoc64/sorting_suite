const chai = require('chai');
const expect = chai.expect;

const MergeSort = require('../merge_sort.js');

describe('MergeSort', function() {
  it('exists', function() {
    var ms = new MergeSort();
    console.log(typeof(ms))
    expect(ms instanceof MergeSort).to.equal(true)
  })
});
