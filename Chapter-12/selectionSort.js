function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var curMinIndex = i;

    for (var j = i; j < arr.length; ++j) {
      if (arr[curMinIndex] > arr[j]) {
        curMinIndex = j;
      }
    }

    const tmp = arr[i];
    arr[i] = arr[curMinIndex];
    arr[curMinIndex] = tmp;
  }
}

let testArr = [19, 5, 6, 14, 67, 36, 17, 34];
selectionSort(testArr);
console.log(testArr);
