function fib(index) {
    let first = 0;
    let second = 1;
    for (let i = 2; i <= index; i++) {
        let result = first + second;
        first = second;
        second = result;
    }
    return second;
}

console.log(fib(90));

function addToOneDigit(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
        if (number == 0 && String(sum).length > 1) {
            number = sum;
            sum = 0;
        }
    }
    return sum;
}

console.log(addToOneDigit(2333));

function isPrime(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(53));