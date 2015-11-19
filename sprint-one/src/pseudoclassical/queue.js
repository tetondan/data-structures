var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.age = 0;
  this.objects = {  };
};

Queue.prototype.size = function() {
  return this.age >= 0 ? this.age : 0;
}

Queue.prototype.enqueue = function(val) {
  if (this.age > 0) {
    for (var key in this.objects) {
      this.objects[key]++
    }
  }
  this.objects[val] = 0;
  this.age++;
}

Queue.prototype.dequeue = function() {
  this.age--;
  for (var key in this.objects) {
    if (this.objects[key] === this.age) {
      delete this.objects[key];
      return key;
    }
  }
};
