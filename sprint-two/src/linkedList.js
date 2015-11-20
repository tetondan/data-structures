var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var container = [];
  var count = 0;

  list.addToTail = function(value) {
    if(this.tail === null){
      this.tail = Node(value);
      this.tail.next = (count +1)
      this.head = this.tail;
      container.push(this.tail.value);
      this[count] = Node(value);
      this[count].next = (count +1)
      count++
    } else {
      this.tail = Node(value);
      this.tail.next = (count +1)
      this[count] = Node(value);
      this[count].next = (count +1)
      container.push(this.tail.value);
      count++
    }
  };

  list.removeHead = function() {
    var headVal = this.head.value;
    // remove head and make next value current head
    var nextKey = this.head.next;
    this.head = this[nextKey];
    for(var i = 0; i < container.length; i++){
      if(container[i] === headVal){
        container.splice(i,1)
      }
    }
    return headVal;

  };

  list.contains = function(target) {
    return (_.indexOf(container, target) !== -1);

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

