var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.length = 0;
  
  return someInstance;
};
var stackMethods = {};

stackMethods.size = function(){return this.length >= 0 ? this.length : 0};

stackMethods.push = function(val){
  this[this.length] = val
  this.length++;
};

stackMethods.pop = function(){
  if(this[this.length -1]){
    var temp = this[this.length -1];
    delete this[this.length -1];
    this.length--;
    return temp;
  }
};
