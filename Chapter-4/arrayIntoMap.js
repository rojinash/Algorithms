function arrayIntoMaps(arr1, arr2){
    if(arr1.length!=arr1.length){
        return("Please give two arrrays of the same length");
    }
    var retArr = {};
    //var retArr = new Object();
    for(var i=0; i<arr1.length; i++){
        retArr[arr1[i]] = arr2[i]
    }
    return retArr;
}

var keyArr = ["First Name", "Last Name", "Age", "Favorite food"];
var valueArr = ["Charlier", "Butler", "9", "Willy Wonka candy bar"];

var associativeArr = arrayIntoMaps(keyArr, valueArr);
console.log(associativeArr);
