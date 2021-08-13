// Hash tables

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const idx = this._hash(key);
    if (!this.data[idx]) {
      this.data[idx] = [];
      this.data[idx].push([key, value]);
    } else {
      this.data[idx].push([key, value]);
    }
  }

  get(key) {
    const idx = this._hash(key);
    if (!Array.isArray(this.data[idx])) {
      return undefined;
    }
    const existingKeyPair = this.data[idx].find((pair) => pair[0] === key);
    if (existingKeyPair) {
      return existingKeyPair[1];
    }
    return undefined;
  }

  keys() {
    const keys = [];
    this.data.forEach((bucket) => {
      if (!Array.isArray(bucket)) {
        return;
      }
      bucket.forEach((pair) => {
        keys.push(pair[0]);
      });
    });

    return keys;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 9);
myHashTable.set("ball", 22);
// console.log(myHashTable.get("apples"));
// console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get("grapessss"));
// console.log(myHashTable.keys());

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  if (!Array.isArray(input)) {
    return undefined;
  }
  const charactersCount = {};
  for (let i = 0; i < input.length; i++) {
    if (!charactersCount[input[i]]) {
      charactersCount[input[i]] = 1;
    } else if (charactersCount[input[i]]) {
      charactersCount[input[i]]++;
      return input[i];
    }
  }

  //if no repeated character was found
  return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 3, 4, 5]));
// console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
