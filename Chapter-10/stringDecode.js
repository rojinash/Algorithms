function stringDecode(encodedStr){
    var decodedStr="";
    while(encodedStr.length){
        var iter = encodedStr.match(/\d+/)[0];
        for( var j=0; j<iter; j++){
            decodedStr+=encodedStr[0];
        }
        encodedStr = encodedStr.substring(1);
        while(parseInt(encodedStr[0])){
            encodedStr = encodedStr.substring(1);
        } 
    }
    return decodedStr;
}

console.log(stringDecode("a11b4c5"));