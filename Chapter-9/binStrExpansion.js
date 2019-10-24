function binStrExpansion(str, startIndex = 0, current = "", returnArr = []) {
    var len = str.length;
    if (len == startIndex) {
        if (str[len-1] == "?") {
            returnArr.push(current + "0");
            returnArr.push(current + "1");
        }
        return;
    } else {
        binStrExpansion(str, startIndex + 1, current + str.charAt(startIndex), returnArr);
    }
    return returnArr;
}


var newArr = inOrderSubsets("1?1");
console.log(newArr);