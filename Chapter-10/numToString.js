function numToString(num){
    var retString = "";
    while(num > 0){
        retString = num % 10 + retString;
        num = Math.floor(num/10);
    }
    return retString;
}

console.log(typeof(numToString(1234)));