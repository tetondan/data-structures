var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var age = 0;
  // Implement the methods below

  // NOTE: We need to use the object's value to keep track of how old the key is - an 
  // object's keys can't be manipulated, but its value can, however.

  someInstance.enqueue = function(value) {
    if(age >= 1){
      for(var key in storage){
        storage[key] += 1;
      }
    }
    storage[value] = 0;
    age++;
  };

  someInstance.dequeue = function() {
    age--;
    if(age >= 0){
      for(var key in storage){
        if(storage[key] === age){
          delete storage[key]
          return key;
        }
      }
    }
  };

  someInstance.size = function() {
    return age >= 0 ? age : 0;
  };

  return someInstance;
};

