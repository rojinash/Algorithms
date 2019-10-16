function SLNode(val){
    this.value = val;
    this.next = null;
}
function SLQueue(){
    this.head = null;
    this.tail = null;
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
    return this;
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
var myQueue = new SLQueue();
myQueue.enqueue(2).enqueue(3).enqueue(4);
myQueue.printQueue();