function gcd(a,b){
    if(a==0 && b==0){
        console.log("Please give positive integers");
        return;
    }
    if(b>a){
        var temp = b;
        b=a;
        a=temp;
    }
    if(b==0){
        console.log(a);
        return a;
    }else{
        return gcd(b,a%b);
    }
}

console.log(gcd(342,735));