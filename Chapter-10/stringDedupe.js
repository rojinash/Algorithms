function stringDedupe(str){
    var retStr = "";
    for(let i = str.length -1; i >= 0; i--){
        if(!retStr.includes(str[i])){
            retStr = str[i]+retStr;
        }
    }
    return retStr;
}

console.log(stringDedupe("hello world! How is everyone doing?"));
console.log(stringDedupe("Snaps! crackles! pops!"));
