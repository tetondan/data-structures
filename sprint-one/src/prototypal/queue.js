var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.age = 0;
  someInstance.objects = {};
  return someInstance;
};

var queueMethods = {};
queueMethods.size = function(){return this.age >= 0 ? this.age : 0;}

queueMethods.enqueue = function(val){ 
  // need to add conditional to account for cases where object's properties are not stores sequentially
  // so we increment each value by 1 to keep track og (age). the oldest (one that matches age) gets deleted first. 
  if(this.age > 0){
    for(var key in this.objects){
      this.objects[key]++;
    }
  }
  this.objects[val] = 0
  this.age++;
}

queueMethods.dequeue = function(){ 
  this.age--;
  for(var key in this.objects){
    if(this.objects[key] === this.age){
      delete this.objects[key]
      return key
    }
  }
}