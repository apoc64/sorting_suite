class MergeSort {
  constructor(numbers) {
    this.numbers = numbers
  }

  get sort() {
    var numArray = this.makeArrays()
    var sorted = this.mSort(numArray)

    return numArray
  }

  makeArrays() {
    return this.numbers.map(num => [num]);
  }
}

MergeSort.prototype.mSort = function(numArray) {
  if(numArray.length > 2) {
    const nums1 = numArray.pop
    const nums2 = numArray.pop
    const sortedEnd = this.mSort([nums1, nums2])
    const sortedBeginning = this.mSort(numArray)
    return this.mSort([sortedEnd, sortedBeginning])
  }
  else
  {
    console.log(numArray)
  }
}

module.exports = MergeSort
