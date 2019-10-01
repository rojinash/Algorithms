function intermediateSums(arr){
    var count = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        count++;
        sum += arr[i];
        if (count == 5){
            for (var j = arr.length-1; j >= i; j--){
                arr[j+1] = arr[j];
            }
            arr[i+1] = sum;
            count = 0;
            sum = 0;
            i++;
        }
    }
    if (sum > 0){
        arr[arr.length] = sum;
    }
    console.log(arr);
    return arr;
}
intermediateSums([1,2,3,4,5,1,2,3,4,5,1,2,3]);