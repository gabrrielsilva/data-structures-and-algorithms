const numbers = [1, 2, 3, 4, 5];

// numbers.push(6); // O(1)
// numbers.pop(); // O(1)
// numbers.unshift(0); // O(n)
// numbers.splice(2, 0, 3.5); // O(n)

function findItem(item) {
  for (let i = 0; i < numbers.length; i++) {
    // O(n)
    if (numbers[i] === item) {
      console.log(`the ${item} is in the array`);
      break;
    } else {
      console.log(`it's not that item`);
    }
  }
}

findItem(3);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
}

const newArray = new MyArray();
newArray.push('a');
newArray.push('b');
newArray.push('c');
console.log(newArray);
newArray.pop();
console.log(newArray);
