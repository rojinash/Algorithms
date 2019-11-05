function rotateString(str, amount){
    newAmount = str.length - (amount % str.length)
    var retStr = "", index = 0;;
    for(let i = 0; i < str.length; i++){
        index = (i+newAmount)%str.length
        var newChar = str[index];
        retStr += newChar;
    }
    return retStr;
}

console.log(rotateString("Hello World!", 9));