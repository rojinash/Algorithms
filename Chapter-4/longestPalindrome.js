function longestPalindrome(str){
    var longest = str[0];
    for(var i = 0; i < str.length; i++){
        for(var j = i+1; j<str.length; j++){
            if(isPalindrome(str.substring(i,j))){
                longest = str.substring(i,j);
            }
        }
    }
    return longest;
}