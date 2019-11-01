function radixSort(arr, radix = 10){
    var buckets = [];
    for(var i = 0; i < radix; i++){
        buckets[i] = [];
    }
    var max = findMax(arr);
    var length = findLen(max);

    var placementIndex = 0;
    var placementCounter = 1;
    var arrayHolder = 0;

    while(length!=0){
        for(i=0; i<arr.length; i++){
            arrayHolder = Math.floor(arr[i]/(Math.pow(10, placementCounter-1)));
            placementIndex = arrayHolder % (Math.pow(10, 1));
            console.log(placementIndex);
            arrayHolder = Math.floor(arrayHolder/ 10);
            console.log(arrayHolder);
            buckets[placementIndex].push(arr[i]);
        }
        var counter = 0;

        for(var i = 0; i < buckets.length; i++){
            while(buckets[i].length > 0){
                arr[counter] = buckets[i].shift();
                counter++;
            }
        }

        placementCounter++;
        length--;
    }
    return arr;
}

function findMax(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

function findLen(num){
    var length = 0;
    while(num != 0){
        length++;
        num = Math.floor(num/10)
    }
    return length;
}
var myArr = [12,1,2222,23,22,45,27,287];
console.log(myArr);
console.log(radixSort(myArr));