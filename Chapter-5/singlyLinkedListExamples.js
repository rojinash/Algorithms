function SLNode(val){
    this.value = val;
    this.next = null;//a pointer to the next SLNode
}

function SLL(){
    this.head = null;


this.addToFront = function(val){
    var newNode = new SLNode(val);
    if(this.head==null){
        this.head = newNode;
    }else{
        newNode.next = this.head;
        this.head = newNode;
    }
    return this;
}
}
SLL.prototype.printLst = function(){
    var current = this.head;
    while(current.next!=null){
        process.stdout.write(current.value + "->");
        current = current.next;
    }
    console.log(current.value);
}

var myList = new SLL();
myList.addToFront(9);
myList.addToFront(6);

myList.printLst();