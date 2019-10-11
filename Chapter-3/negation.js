function threesFives(){
    var temp = 0;
    for(var i = 0; i <= 200; i++){
        if((i % 3 == 0 || i % 5 == 0) && (!(i % 15 == 0))){
                console.log(i);
                temp += i;
            }
    }
    console.log(temp);
}

threesFives();