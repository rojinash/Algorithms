function insertionSort(arr){
    for(var i =0; i<arr.length; i++){
        var current = arr[i];
        var j = i-1;
        while(j>=0 && arr[j] > current){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([3,2,1]));