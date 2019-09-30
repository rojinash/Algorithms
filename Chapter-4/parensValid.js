function parensValid(str){
    var openingArr = [];
    for(var i=0; i<str.length; i++){
        if(str[i]=="("){
            openingArr.push(str[i]);
        }
        if(str[i]==")"){
            if(openingArr.length==0){
                return false;
            }
            openingArr.pop();
        }
    }
    if(openingArr.length==0){
        return true;
    }else{
        return false;
    }
}
var statement1 = "This( ((is a ))))"
var statement2 = "This( ((is a )[][))"
console.log("Statement1 is " + parensValid(statement1));
console.log("Statement2 is " + parensValid(statement2));