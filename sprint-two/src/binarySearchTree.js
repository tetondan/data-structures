var BinarySearchTree = function(value) {
  var bsTree = Object.create(bsTreeMethods);
  bsTree.value = value
  bsTree.left = null
  bsTree.right = null
  return bsTree;
};

var bsTreeMethods = {};

bsTreeMethods.insert = function(val){
  var start = this;
  var findBottom = function(objectVal){
    if(val > objectVal.value){
      if(objectVal.right === null){
        objectVal.right = {value: val, left: null, right: null}
      } else {
        findBottom(objectVal.right)
      }
    }else {
      if(objectVal.left === null){
        objectVal.left = {value: val, left: null, right: null}
      } else {
        findBottom(objectVal.left)
      }
    }
  }
  return findBottom(start);  
};

bsTreeMethods.contains = function(val){
  var isContained = false;
  var searcher = function(objectVal) {
    if (objectVal.value === val) {
      isContained = true;
    } else {
      if(val > objectVal.value && objectVal.right !== null){
        searcher(objectVal.right);
      } else if(val > objectVal.value && objectVal.left !== null){
        searcher(objectVal.left);
      }
    }
  }
  searcher(this);
  return isContained;
};

bsTreeMethods.depthFirstLog = function(func){
  var each = function(objVal){
    func(objVal.value);
    if(objVal.right !== null){
      each(objVal.right);
    }
    if(objVal.left !== null){
      each(objVal.left)
    }
  }
  return each(this);
};





/*
 * Complexity: What is the time complexity of the above functions?
 */

