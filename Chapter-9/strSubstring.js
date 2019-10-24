function strSubstring(str, solutions = [], partial = "") {
    solutions.push(partial);
    for (let i = 0; i < str.length; i++) {
        console.log("This is the " + i + "th iteration");
        strSubstring(str.slice(i + 1), solutions, partial + str[i]);
    }
    return solutions;
}
function inOrderSubsets(str, startIndex = 0, current = "", returnArr = []){
    var len = str.length;
    if(len==startIndex){
        returnArr.push(current);
    }else{
        inOrderSubsets(str, startIndex+1, current, returnArr);
        inOrderSubsets(str, startIndex+1, current+str.charAt(startIndex), returnArr);
    }
    return returnArr; 
}

var myArr = inOrderSubsets("abc");
console.log(myArr);
