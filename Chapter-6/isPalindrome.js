function SLNode(val){
    this.value = val;
    this.next = null;
}
function SLStack(){
    this.top = null;
    this.count = 0;
}
SLStack.prototype.push = function(val){
    var newNode = new SLNode(val);
    newNode.next = this.top;
    this.top = newNode;
    this.count++;
    return this;
}
SLStack.prototype.pop = function(){
    if(this.count < 1){
        return;
    }
    var retValue = this.top.value;
    this.top = this.top.next;
    this.count--;
    return retValue;
}
function SLQueue(){
    this.head = null;
    this.tail = null;
    this.count = 0;
}
SLQueue.prototype.enqueue = function(val){
    var newNode = new SLNode(val);
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }else{
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.count++;
    return this;
}
SLQueue.prototype.dequeue = function(){
    if(this.count < 1){
        return;
    }
    var retValue = this.head.value;
    this.head = this.head.next;
    this.count--;
    return retValue;
}

SLQueue.prototype.printQueue = function(){
    if(!this.head){
        return "Empty list";
    }
    var current = this.head;
    while(current.next!=null){
        process.stdout.write(current.value + "->");
        current = current.next;
    }
    console.log(current.value);
}

function isPalindrome(stringAsQueue){
    var len = stringAsQueue.count;
    var tempStack = new SLStack();
    var tempQueue = new SLQueue();
    tempQueue.printQueue();
    for(var i = 0; i < len; i++){
        var currentChar = stringAsQueue.dequeue();
        tempStack.push(currentChar);
        tempQueue.enqueue(currentChar);
        tempQueue.printQueue();
    }
    for(var i = 0; i < tempQueue.count; i++){
        if(tempQueue.dequeue()!=tempStack.pop()){
            return false;
        }
        tempQueue.printQueue();
        return true;
    }
}

var myQueue = new SLQueue();
myQueue.enqueue(3).enqueue(9);
myQueue.dequeue();
console.log(myQueue.head.value);
var myStack = new SLStack();
myStack.push(3).push(9);
var lala = myStack.pop();
console.log(myStack.top.value);
var pali = new SLQueue();
pali.enqueue("h").enqueue("a").enqueue("n").enqueue("n").enqueue("a").enqueue("h");
pali.printQueue();
var isIt = isPalindrome(pali);
