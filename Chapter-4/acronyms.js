function acronym(str){
    var retStr = "";
    var alphaPunct = /^[a-zA-Z!.,]+$/;
    var arr = str.split(" ");
    console.log(arr);
    for(var i=0; i<arr.length; i++){
        if(arr[i].match(alphaPunct)){
            retStr+=arr[i][0].toUpperCase();
        }else if(arr[i]!=" "){
            retStr+=arr[i];
        }
    }
    return retStr;
}

ret = acronym("  Welcome to coding dojo - the best place on Earth!");
console.log(ret);