function balanceIndex(arr){
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    var partialSum = arr[0];
    for(let i = 1; i < arr.length - 1; i++){
        if(partialSum == (sum-partialSum-arr[i])){
            return i;
        }
        partialSum+= arr[i];
    }
    return -1;
}

console.log(balanceIndex([1,1,1,1,1,2]));