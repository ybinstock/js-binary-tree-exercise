function BinTree(value){
  this.left = null;
  this.right = null;
  this.value = value;
}


BinTree.prototype.insert = function(val){
  if (this.value === null){
    this.value = val;
  } else {
    if (val >= this.value){
      if (this.right === null ){
        this.right = new BinTree(val);
      } else {
        this.right.insert(val);
      }
    } else if (val < this.value) {
      if (this.left === null ){
        this.left = new BinTree(val);
      } else {
        this.left.insert(val);
      }
    }
  }
  return this;
};

BinTree.prototype.isLeaf = function(){
  // if (this.right === null && this.left === null ){
  //     return true;
  // } else {
  //     return false;}
  // // return this.right === null && this.left === null ? true : false;
  // BEST VERSION BELOW with a TERNARY
  return this.right === null && this.left === null;

};




BinTree.prototype.search = function(val){
  if (this.value === val ){
    return true;
  } else if (this.isLeaf()){
    return false;
  } else if (this.value > val){
    if (this.left !== null){
     return this.left.search(val);
    } else {
      return false;
    }
    } else {
     return this.right === null ? this.right.search(val) : false;
    }
  };

try{
  module.exports = BinTree;
} catch(e){

}