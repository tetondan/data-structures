var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
      length: 0
  };
  extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  
  push: function(value){
    this[this.length] = value;
    debugger;
    this.length++;
  },

  pop: function(){
    if(this[this.length -1]){
      var temp = this[this.length -1];
      delete this[this.length-1];
      this.length--;
      return temp; 
    }
    
  },

  size: function(){
    return this.length >= 0 ? this.length : 0;
  }
};

var extend = function(ob1, ob2){
  for(var key in ob2){
    ob1[key] = ob2[key];
  }
};
