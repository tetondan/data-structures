var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    age: 0,
    objects: {}
  };
  extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(val){
    if (this.age > 0) {
      for (var key in this.objects) {
          this.objects[key]++;
      }
    }
    this.objects[val] = 0;
    this.age++;
  },
  
  dequeue: function(){
    this.age--;

  },

  size: function(){
    return this.age >= 0 ? this.age : 0;

  }

};

var extend = function(ob1, ob2){
  for(var key in ob2){
    ob1[key] = ob2[key];
  }
};

