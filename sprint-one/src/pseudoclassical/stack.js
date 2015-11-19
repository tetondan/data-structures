var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Stack.prototype.size = function(){return this.length >= 0 ? this.length : 0;}

Stack.prototype.push = function(val){
  this[this.length] = val;
  this.length++;
}

Stack.prototype.pop = function() {
  if (this[this.length - 1]) {
    var tempVal = this[this.length -1];
    delete this[this.length-1];
    this.length--;
    return tempVal;
  }
}

