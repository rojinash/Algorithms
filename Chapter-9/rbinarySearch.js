function rBinarySearch(arr, val){
    binarySearchHelper(0, arr.length, arr, val);
}

function binarySearchHelper(low, high, arr, val){
    var mid = low + Math.floor((high-low)/2);
    console.log(mid);
    if(arr[mid] == val){
        return true;
    }else if(val < arr[mid]){
        return binarySearchHelper(0, mid, arr.slice(low,mid), val);
    }else if(val>arr[mid]){
        return binarySearchHelper(0, mid, arr.slice(mid,high), val);
    }
    return false;
}
var isPresent = rBinarySearch([1,2,3,4,5,6,7], 5);
console.log(isPresent);