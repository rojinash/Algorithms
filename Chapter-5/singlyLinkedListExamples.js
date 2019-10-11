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

SLL.prototype.back = function(){
    if(this.head==null){
        return;
    }
    var current = this.head;
    while(current.next){
        current = current.next;
    }
    console.log(current.value);
}

SLL.prototype.maxToBack = function(){
    if(this.head==null){
        return;
    }
    var max = this.head;
    var beforeMax = this.head;
    var current = this.head;
    while(current.next!=null){
        if(max.value < current.next.value){
            max = current.next;
            beforeMax = current;
        }
        current = current.next;
    }
    beforeMax.next = max.next;
    max.next = null;
    current.next = max;
    return this;
}

SLL.prototype.minToFront = function(){
    if(this.head==null){
        return;
    }
    var min = this.head;
    var beforeMin = this.head;
    var current = this.head;
    while(current.next!=null){
        if(min.value > current.next.value){
            min = current.next;
            beforeMin = current;
        }
        current = current.next;
    }
    beforeMin.next = min.next;
    min.next = this.head;
    this.head = min;
    return this;
}

SLL.prototype.removeNode = function(val){
    if(this.head==null){
        return;
    }
    if(this.head.value == val){
        this.head = this.head.next;
        return val;
    }
    var prev = this.head;
    var current = this.head;
    while(current.next){
        if(current.value == val){
            prev.next = current.next
            return val;
        }
        prev = current;
        current = current.next;
    }
    if(current.value==val){
        prev.next = null;
        return val;
    }
    console.log("No value found");
}

SLL.prototype.appendAt = function(index, val){
    var newNode = new SLNode(val);
    if(index==0){
        newNode.next=this.head.next;
        this.head.next=newNode;
        return this;
    }
    var counter = 0;
    var current = this.head;
    while(current.next){
        if(index==counter){
            newNode.next = current.next;
            current.next = newNode;
            return this;
        }
        counter++;
        current = current.next;
    }
    if(index==counter){
        newNode.next=null;
        current.next=newNode;
        return this;
    }
    console.log("Index out of range!");
}

SLL.prototype.prependAt = function(index, val){
    var newNode = new SLNode(val);
    if(index==0){
        newNode.next=this.head;
        this.head=newNode;
        return this;
    }
    var counter = 0;
    var current = this.head;
    var previous = current;
    while(current.next){
        if(index==counter){
            previous.next = newNode;
            newNode.next = current;
            return this;
        }
        counter++;
        previous = current;
        current = current.next;
    }
    if(index==counter){
        newNode.next=previous.next;
        previous.next=newNode;
        return this;
    }
    console.log("Index out of range!");
}


SLL.prototype.printLst = function(){
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

SLL.prototype.partition = function(val){
    var bigList = new SLL();
    var smallList = new SLL();

    var current = this.head;
    while(current!=null){
        if(current.value < val){
            smallList.addToEnd(current.value);
        }else{
            bigList.addToEnd(current.value)
        }
        current = current.next;
    }
    var runner = smallList.head;
    while(runner.next!=null){
        runner = runner.next;
    }
    console.log(runner.value);
    smallList.printLst();
    runner.next = bigList.head;
    smallList.printLst();
    return smallList;
}

var myList = new SLL();
var emptyList = new SLL();
myList.addToFront(3).addToFront(8).addToFront(1).addToFront(6).addToFront(4);
myList.printLst();
myList.addToEnd(1).addToEnd(2).addToEnd(3);
myList.printLst();
myList.removeFromFront();
myList.printLst();
myList.removeFromEnd();
myList.printLst();
myList.maxToBack();
myList.printLst();
myList.minToFront();
myList.printLst();
myList.prependAt(1,"Again");
myList.printLst();
console.log(myList.removeNode(7));
myList = myList.partition(6);
myList.printLst();
