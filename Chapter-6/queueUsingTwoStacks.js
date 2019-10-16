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
    return this;
}

SLStack.prototype.pop = function(val){
    var retVal = this.top.value;
    this.top = this.top.next;
    return retVal;
}

SLStack.prototype.printStack = function(){
    if(!this.top){
        console.log("Empty Stack");
        return;
    }
    var current = this.top;
    while(current.next){
        process.stdout.write(current.value + "->");
        current = current.next;
    }
    console.log(current.value);
}

SLStack.prototype.enqueue = function(val){
    this.push(val);
}

SLStack.prototype.dequeue = function()
{
    var tempStack = new SLStack;
    while(this.top)
    {
        tempStack.push(this.pop());
    }
    var retValue = tempStack.pop();
    while(tempStack.top)
    {
        this.push(tempStack.pop());
    }
    return this;
}

var myStack = new SLStack();
myStack.push(2).push(3).push(4).push(5).push(6);
myStack.printStack();
myStack.pop(); //removes the last thing added (6)
myStack.printStack();
myStack.enqueue(7); //adds it to the end (top of the stack)
myStack.printStack();
myStack.dequeue(); //removes from the beginning (bottom of the stack)
myStack.printStack();