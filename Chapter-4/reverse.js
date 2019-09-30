function reverse(str){
    if(typeof(str)!= "string"){
        console.log("Please give a string");
        return;
    }
    var returnStr = "";
    for(var i = str.length-1; i >=0; i--){
        returnStr += str[i];
    }
    return returnStr;
}

rev = reverse("Heoo World");
console.log(rev);