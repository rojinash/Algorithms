function bracesValid(str){
    var openingBraces = [];
    var paren = 0; curly = 0; square = 0;
    for(var i=0; i<str.length; i++){
        switch(str[i]){
            case "(":
                paren++;
                openingBraces.push(str[i]);
                break;
            case "{":
                curly++;
                openingBraces.push(str[i]);
                break;
            case "[":
                square++;
                openingBraces.push(str[i]);
                break;
            case ")":
                paren--;
                if(openingBraces[openingBraces.length-1]=="("){
                    openingBraces.pop();
                }
                break;
            case "}":
                curly--;
                if(openingBraces[openingBraces.length-1]=="{"){
                    openingBraces.pop();
                }
                break;
            case "]":
                square--;
                if(openingBraces[openingBraces.length-1]=="["){
                    openingBraces.pop();
                }
                break;
        }

    }
}