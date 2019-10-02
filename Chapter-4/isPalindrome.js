//Does not ignore capitals, spaces, punctuation.
function isPalindrome(str){
    var first = 0, last = str.length-1;
    while(first<last){
      if(str[first]!=str[last]){
        return false;
      }
      first++;
      last--;
    }
    return true;
  }
 
  //Ignores capitals, spaces, all punctuation.
  function isPalindromeFancy(str){
    str = str.toLowerCase();
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(str.charCodeAt(i)>96 && str.charCodeAt(i)<124){
            newStr+= str[i];
        }
    }
    return isPalindrome(newStr);
  }

  function longestPalindrome(str){
    var longest = str[0];
    for(var i = 0; i < str.length; i++){
        for(var j = i+2; j<str.length+1; j++){
            var cur = str.substring(i,j);
            if(isPalindromeFancy(cur)&&(cur.length > longest.length)){
                longest = cur;
            }
        }
    }
    return longest;
}
console.log(longestPalindrome("Does this sentence have any palindromes? What's the longest I wonder..."));