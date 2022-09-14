class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
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
        if (current.right === null) {
          current.right = new Node(val);
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

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
