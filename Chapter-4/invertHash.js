function invertHash(associativeArr){
    var retAssociativeArr=new Object();
    for(key in associativeArr){
        associativeArr[key] = "Hello"
    }
    return associativeArr;
}

var associArr = {"First Name": "Charlie", "Last Name": "Wilson", "Location": "Home", "Number": 1231231234};
console.log(invertHash(associArr));