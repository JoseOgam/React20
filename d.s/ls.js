class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

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
  prepend() {}
  delete() {}
  search() {}
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

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);

list.print();
