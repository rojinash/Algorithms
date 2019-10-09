function SLNode(val){
    this.value = val;
    this.next = null;//a pointer to the next SLNode(with the attributes value and next)
}

function SLL(){
    this.head = null;
}

SLL.prototype.addToFront = function(val){
    var newNode = new SLNode(val);
    if(this.head==null){
        this.head = newNode;
    }else{
        newNode.next = this.head;
        this.head = newNode;
    }
    return this;
}

SLL.prototype.addToEnd = function(val){
    var newNode = new SLNode(val);
    if(this.head==null){
        this.head = newNode;
    }else{
        var current = this.head;
        while(current.next!=null){
            current=current.next
        }
        current.next=newNode;
    }
    return this;
}

SLL.prototype.removeFromFront = function(){
    if(this.head==null){
        return;
    }
    this.head = this.head.next;
    return this;
}

SLL.prototype.removeFromEnd = function(){
    if(!this.head){
        return;
    }
    var current = this.head;
    while(current.next.next!=null){
        current = current.next;
    }
    current.next=null;
    return this;
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
myList.addToFront(9).addToFront(8).addToFront(7).addToFront(6).addToFront(5);
myList.printLst();
myList.addToEnd(1).addToEnd(2).addToEnd(3);
myList.printLst();
myList.removeFromFront();
myList.printLst();
myList.removeFromEnd();
myList.printLst();