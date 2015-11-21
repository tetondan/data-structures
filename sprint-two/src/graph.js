

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.objects = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
   this.objects[node] = [];
 }

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
 if(this.objects[node] !== undefined){
  return true
 } else {
  return false
 }
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this.objects[node] !== undefined){
    delete this.objects[node];
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) { 
  if(_.indexOf(this.objects[fromNode], toNode) >= 0){
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.objects[fromNode].push(toNode)
  this.objects[toNode].push(fromNode)
};
// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var toIndex = _.indexOf(this.objects[fromNode], toNode);
  var fromIndex = _.indexOf(this.objects[toNode], fromNode);
  this.objects[fromNode].splice(toIndex,1);
  this.objects[toNode].splice(fromIndex,1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var key in this.objects){
    cb(key)
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

