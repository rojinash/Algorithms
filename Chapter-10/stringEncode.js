function stringEncode(str){
    var retStr = "";
    let i = 0;
    let counter = 0;
    while(i < str.length){
        let helper = 1, j = i+1;
        while(str[j]==str[i]){
            helper++;
            j++;    
        }
        retStr = retStr + str[i] + helper;
        counter += helper;
        i = counter;
    }
    if(str.length <= retStr.length){
        return str;
    }
    return retStr;
}

console.log(stringEncode("aaaabbbbbcccccdabcf"));
console.log(stringEncode("cdabcf"));
console.log(stringEncode("bbcc"));