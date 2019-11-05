function invertHash(associativeArr){
    var retAssociativeArr=new Object();
    for(key in associativeArr){
        retAssociativeArr[associativeArr[key]] = key; 
    }
    return retAssociativeArr;
}

var associArr = {"First Name": "Charlie", "Last Name": "Wilson", "Location": "Home", "Number": 1231231234};
console.log(invertHash(associArr));