function bookIndex(arr){
    var retStr = "";
    for(var i=0; i<arr.length; i++){
        if(i != 0){
            retStr+=", "
        }
        if(arr[i+1]==arr[i]+1){
            var start = arr[i];
            while(arr[i+1]==arr[i]+1){
                i++;
            }
            var end = arr[i];
            retStr += start + "-" + end;
        }
        else{
            retStr+=arr[i];
        }
    }
    return retStr;
}
myArr = [1,3,4,5,6,8,99];
console.log(bookIndex(myArr));