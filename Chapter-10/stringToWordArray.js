function stringToWordArray(str){
    var retArr = [];
    while(str.indexOf(" ")!=-1){
        retArr.push(str.substring(0,str.indexOf(" ")));
        str = str.substring(str.indexOf(" ")+1);
    }
    retArr.push(str)
    return retArr;  
}

console.log(stringToWordArray("Hello world! Today is a Monday."))