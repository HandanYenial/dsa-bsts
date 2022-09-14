class Node {
  constructor(val, left = null, right = null) { 
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) { //default value of root is null
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */
  //1. if the tree is empty insert to the root
  //2. if the tree is NOT empty(otherwise) find the correct spot for the new node

  insert(val) {
    //1. if the tree is empty insert to the root
    if (this.root ===null){
      this.root = root;
    }
  //2. if the tree is NOT empty(otherwise) find the correct spot for the new node
    let current = this.root //start at the root
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) { //if there is no right child
          current.right = new Node(val); //insert the new node
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val , current = this.root) {
    //if tree is empty insert to the root
    if(this.root = null){
      this.root = new Node(val);
      return this;
    }
    //if tree is NOT empty find the correct spot for the new node
    if(val<current.val){
      if (current.left = null){ //if there is no left child
        current.left = new Node(val); //insert the new node
        return this;
      }
      return this.insertRecursively(val, current.left); //otherwise keep looking
    } else {
      if (current.right = null){ //if there is no right child
        current.right = new Node(val); //insert the new node
        return this;
      }
      return this.insertRecursively(val, current.right); //otherwise keep looking
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root; //start at the root
    let found = false; //set found to false

    if (val === currentNode.val){
      return currentNode;
    }

    while (currentNode && !found ){
      if (val < currentNode.val){
        currentNode = currentNode.left;
      } else if (val > currentNode.val){
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return undefined;
    }
    return currentNode;
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null){
      return undefined;
    }
    if (val < current.val){
      if(current.left === null){
        return undefined;
      }
      return this.findRecursively(val, current.left);
    } else if(val> current.val){
      if (current.right === null){
        return undefined;
      }
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node){
      data.push(node.val); //visit the node
      node.left && traverse(node.left); //if there is a left child, call traverse on it
      node.right && traverse(node.right); //if there is a right child, call traverse on it
    }
    traverse(current);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node){
      node.left && traverse(node.left); //go to left if there is a left
      data.push(node.val);
      node.right && traverse(node.right); //go to right if there is a right
    }
    traverse(current);
    return data;

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node){
      node.left && traverse(node.left); //go to left if there is a left
      node.right && traverse(node.right); //go to right if there is a right
      data.push(node.val);
    }
    traverse(current);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root; //start at the root
    let queue = []; //create a queue
    let data = []; //create an array to store the data

    queue.push(node); //push the root to the queue

    while (queue.length){
      node = queue.shift();
      data.push(node.val);
      if(node.left){
        queue.push(node.left);
      }
      if(node.right){
        queue.push(node.right);
      }
    }
    return data;
  }

}

module.exports = BinarySearchTree;
