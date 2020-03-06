function radixSort(arr, radix = 10) {
    let buckets = [];
    for (let i = 0; i < radix; i++) {
        buckets[i] = [];
    }
    let max = findMax(arr);
    let length = findLen(max, radix);

    let placementIndex = 0;
    let placementCounter = 1;
    let arrayHolder = 0;

    while (length != 0) {
        for (i = 0; i < arr.length; i++) {
            arrayHolder = Math.floor(arr[i] / (Math.pow(radix, placementCounter - 1)));
            placementIndex = arrayHolder % radix;
            buckets[placementIndex].push(arr[i]);
        }
        let counter = 0;

        for (let i = 0; i < buckets.length; i++) {
            while (buckets[i].length > 0) {
                arr[counter] = buckets[i].shift();
                counter++;
            }
        }

        placementCounter++;
        length--;
    }
    return arr;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findLen(num, base) {
    let length = 0;
    while (num != 0) {
        length++;
        num = Math.floor(num / base)
    }
    return length;
}
let myArr = [12, 1, 2222, 23, 22, 45, 27, 287];
let binaryArr = [11, 100, 10, 1, 10110, 1110, 11, 1001]

console.log(myArr);
console.log(radixSort(myArr));
console.log(binaryArr);
console.log(radixSort(binaryArr, 2));