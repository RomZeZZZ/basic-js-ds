const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root_tree = null;
  }
  root() {
    return this.root_tree;
  }
  minNode(node) {
    if (node.left === null)
      return node;
    else
      return this.minNode(node.left);
  } 
  maxNode(node) {
    if (node.right === null)
      return node;
    else
      return this.maxNode(node.right);
  } 
  hasNode(node, value) {
    if (node.data == value) {
      return true
    } else if (value < node.data && node.left !== null) {
      return this.hasNode(node.left, value);
    } else if (value > node.data && node.right !== null) {
      return this.hasNode(node.right, value);
    }
   return false;
  } 
  findNode(node, value) {
    if (node.data == value) {
      return node;
    } else if (value < node.data && node.left !== null) {
      return this.findNode(node.left, value);
    } else if (value > node.data && node.right !== null) {
      return this.findNode(node.right, value);
    }
   return null;
  } 

  add(data) {
    let newNode = new Node(data);
    if(this.root_tree === null){
      this.root_tree = newNode;
    } else {
      this.addNode(this.root_tree, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) {
            node.left = newNode;
        } else {
            this.addNode(node.left, newNode);
        }
    } else {
        if (node.right === null) {
            node.right = newNode;
        } else {
            this.addNode(node.right, newNode);
        }
    }
  }

  has(data) {
    return this.hasNode(this.root_tree, data);
  }

  find(data) {
    return this.findNode(this.root_tree, data);
  }

  remove(data) {
    this.root_tree = this.removeNode(this.root_tree, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    }
    else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
          node = null;
          return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
  }
  min() {
    return this.minNode(this.root_tree).data;
  }

  max() {
    return this.maxNode(this.root_tree).data;
  }
}
class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child 
      this.right = null; // right node child 
  }
}
module.exports = {
  BinarySearchTree
};