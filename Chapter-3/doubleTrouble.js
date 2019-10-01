function insertAt(arr, index, value){
    if(index<0||index>arr.length){
        return "Index out of range";
    }
    for(var i=arr.length; i>index; i--){
        arr[i] = arr[i-1];
    }
    arr[i] = value;
    return arr;
}
function doubleTrouble(arr){
    var newLen = 2*arr.length;
    for(var i=0; i<newLen; i+=2){
        insertAt(arr, i+1, arr[i]);
    }
    return arr;
}
doubleTrouble([1,2,3,4]);
console.log(doubleTrouble([1,2,3,4]));