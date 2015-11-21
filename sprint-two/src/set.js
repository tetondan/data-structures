var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = 0;
};

setPrototype.contains = function(item) {
  for(var key in this._storage){
    if(key === item){
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


