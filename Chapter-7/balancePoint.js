function balancePoint(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
    var partialSum = 0;
    for(var i = 0; i < arr.length - 1; i++){
        partialSum+= arr[i];
        if(partialSum == (sum-partialSum)){
            return true;
        }
    }
    return false;
}

console.log(balancePoint([11,1,2,3,4,10,1]));