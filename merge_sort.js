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
  console.log("Starting MS");
  console.log(numArray)
  if(numArray.length > 2) {
    const nums1 = numArray.pop()
    const nums2 = numArray.pop()
    const sortedEnd = this.mSort([nums1, nums2])
    const sortedBeginning = this.mSort(numArray)
    this.mSort([sortedEnd, sortedBeginning])
  }
  else if(numArray.length === 2)
  {
    console.log(numArray[0], numArray[1])
    var sortedNums = []
    var array1 = numArray[0]
    var array2 = numArray[1]
    while(array1.length > 0 && array2.length > 0) {
      if(array1[0] > array2[0]) {
        sortedNums.push(array2.shift())
      } else {
        sortedNums.push(array1.shift())
      }
    }
    console.log("Sorted:");
    console.log(sortedNums)
    console.log(array1);
    console.log(array2);

    if(array1.length > 0) {
      console.log("Adding ar1");
      sortedNums = sortedNums.concat(array1)
    } else {
      console.log("Adding ar2");
      sortedNums = sortedNums.concat(array2)
    }
    console.log(sortedNums);
    return sortedNums
  }
  else {
    console.log("length of one")
    return numArray[0]
  }
}

module.exports = MergeSort
