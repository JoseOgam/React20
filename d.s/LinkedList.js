// linkedList
// node contain the data element and the reference to the next node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  // insert new Node at the end of a linked list

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  //insert the new Node at the beggining of the linked list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // delete the node from the linkedList
  delete(data) {
    if (!this.head) {
      return; //list is empty
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next != null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Search: Find the first occurrence of a node with the given data
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  print() {
    let current = this.head;
    let element = [];
    while (current != null) {
      element.push(current.data);
      current = current.next;
    }
    console.log(element.join("->"));
  }
}

const list = new linkedList();

list.append(5);
list.append(10);
list.append(15);
list.append(20);
list.prepend(2);

list.print();
