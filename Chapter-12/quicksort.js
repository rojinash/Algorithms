function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}

function partition(arr, left, right) {
    let pivInd = Math.floor(Math.random() * (right + 1 - left) + left);
    pivot = arr[pivInd];
    swap(arr, right, pivInd);
    pivInd = right;
    right = right - 1;

    while (left <= right) {
        while (arr[left] <= pivot && left <= right) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }

    }
    swap(arr, left, pivInd)
        // console.log(arr);
    return left;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) {
        return arr;
    }
    part = partition(arr, left, right);
    quickSort(arr, left, part - 1);
    quickSort(arr, part + 1, right);
    return arr;
}
let arr = [4, 1, 2, 23, 112, 134, 11, 90, 1, 221, 13, 11];
console.log(quickSort(arr));