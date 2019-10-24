function sigma(num){
    if(num < 1){
        return 0;
    }else{
        return num + sigma(num-1);
    }
}

console.log(sigma(4));
console.log(sigma(3));