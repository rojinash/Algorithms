function rotateString(str, amount){
    newAmount = str.length - (amount % str.length)
    var retStr = "";
    for(let i=0; i<str.length; i++){
        var index = (i+newAmount)%str.length
        var newChar = str[index];
        retStr += newChar;
    }
    return retStr;
}

function isRotation(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    for(var i=0; i<str1.length; i++){
        if(str1 == rotateString(str2, i)){
            return true;
        }
    }
    return false;
}

function isRotationBetter(str1, str2) {
    var tmpStr = "";
    var first = str1[0];
    var i = 0;
    while (str2.indexOf(first, i) != -1) {
        tmpStr = rotateString(str2, str2.length - str2.indexOf(first, i));
        if (str1 == tmpStr) {
            return true;
        }
        i = str2.indexOf(first, i) + 1;
    }
    return false;
}

//console.time("connor");
//console.log(isRotationBetter("hello world", "llo worldhe"));
//console.timeEnd("connor");
console.time("rojina");
console.log(isRotation("hello world", "llo worldhe"));
console.timeEnd("rojina");


//console.log(isRotationBetter("hello world", "lloorldhe"));

