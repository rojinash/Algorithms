function coinChange(amount, coinArr = [1,5,10,25,100], counter = 0){
    if(amount < 0){
        return 0;
    }
    if(amount == 0){
        return 1;
    }
    if(counter==coinArr.length&&amount>0){
        return 0;
    }
    return coinChange(amount-coinArr[counter], coinArr, counter) + coinChange(amount, coinArr, counter+1);
}

console.log(coinChange(2));
console.log(coinChange(5, [1,2]));
console.log(coinChange(5, [1,2,3,4,5], 1));