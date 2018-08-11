const chai = require('chai');
const expect = chai.expect;

const MergeSort = require('../merge_sort.js');

describe('MergeSort', function() {
  it('exists', function() {
    var ms = new MergeSort();
    console.log(typeof(ms))
    expect(ms instanceof MergeSort).to.equal(true)
  });

  it('can have an array of ints', function() {
    var ms = new MergeSort([3, 5, 2, 9, 5])
    const numbers = ms.numbers

    expect(numbers).to.be.a('array')
    expect(numbers.length).to.equal(5)
  });

  it('can sort an array of ints', function() {
    var ms = new MergeSort([3, 5, 2, 9, 5])
    const numbers = ms.sort

    expect(numbers).to.be.a('array')
    expect(numbers.length).to.equal(5)
    expect(numbers).to.equal([2, 3, 5, 5, 9])
  });
});
