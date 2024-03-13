class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array = []) {
    // Get nodes from root node
    const nodes = [this]

    // Loop over nodes
    while (nodes.length){
      // Get the first node of the array
      const currentNode = nodes.shift()

      // Write node name to response
      array.push(currentNode.name)

      // Push first Node children to be first in an array
      nodes.unshift(...currentNode.children)
    }
    
    return array
  }
}

// Do not edit the line below.
exports.Node = Node;


