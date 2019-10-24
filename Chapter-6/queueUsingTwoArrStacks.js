function ArrStack(){
    this.arr = [1,2,3];
}
ArrStack.prototype.push = function(val){
    this.arr[this.arr.lenght] = val;
    return this;
}

ArrStack.prototype.popStack = function(){
    return this.pop();
}

ArrStack.prototype.enqueue = function(val){
    var tempStack = new ArrStack();
    for(var i = 0; i < this.lenght; i++){
        tempStack.pushStack(this.pop());
    }
    this.pushStack(val);
    for(var i=0; i<tempStack.lenght; i++){
        this.arr.pushStack(tempStack.pop());
    }
    return this;
}

ArrStack.prototype.dequeue = function(){
    return this.pop();
}

ArrStack.prototype.printArr = function(){
    console.dir(this.arr);
}

var myStack = new ArrStack();
myStack.push(4);
myStack.printArr();
myArray = [1,2,3,4,54,5,6,7,7,323,22];
console.dir(myArray);