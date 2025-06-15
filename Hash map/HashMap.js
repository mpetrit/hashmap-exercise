export default class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  getIndex(key) {
    const index = this.hash(key);
    if (index < 0 || index >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }
    return index;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  //RESIZING,check with this then create an array,
  //  repopulate based on the new array , and update it

  resize() {
    console.log(this.capacity, "asdas");
    this.capacity *= 2;
    const newArray = new Array(this.capacity).fill(null);

    for (let item of this.buckets) {
      if (item !== null) {
        for (let i of item) {
          const index = this.getIndex(i.key);

          if (!newArray[index]) {
            newArray[index] = [];
          }

          newArray[index].push({ key: i.key, value: i.value });
        }
      }
    }
    this.buckets = newArray;
  }

  set(key, value) {
    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }

    const index = this.getIndex(key);
    console.log(index, " val ", value);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    for (let i of this.buckets[index]) {
      if (i.key === key) {
        i.value = value;
        return;
      }
    }
    this.buckets[index].push({ key, value });
    this.size += 1;
  }

  get(key) {
    const index = this.getIndex(key);

    if (!this.buckets[index]) {
      return null;
    }

    for (let i of this.buckets[index]) {
      if (i.key === key) {
        return i.value;
      }
    }
    return null;
  }

  has(key) {
    const index = this.getIndex(key);

    if (!this.buckets[index]) {
      return false;
    }

    for (let i of this.buckets[index]) {
      if (i.key === key) {
        return true;
      }
    }
    return false;
  }
  remove(key) {
    const index = this.getIndex(key);

    if (!this.buckets[index]) {
      return false;
    }

    let counter = 0;
    for (let i of this.buckets[index]) {
      if (i.key === key) {
        this.buckets[index].splice(counter, 1);
        this.size -= 1;
        if (this.buckets[index].length === 0) {
          this.buckets[index] = null;
        }
        return true;
      }
      counter += 1;
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.capacity = 16;
    this.buckets = new Array(this.capacity).fill(null);
  }

  keys() {
    const tempArr = [];
    for (let item of this.buckets) {
      if (item !== null) {
        for (let i of item) {
          tempArr.push(i.key);
        }
      }
    }
    return tempArr;
  }

  values() {
    const tempArr = [];
    for (let item of this.buckets) {
      if (item !== null) {
        for (let i of item) {
          tempArr.push(i.value);
        }
      }
    }
    return tempArr;
  }

  entries() {
    const tempArr = [];
    for (let item of this.buckets) {
      if (item !== null) {
        for (let i of item) {
          tempArr.push([i.key, i.value]);
        }
      }
    }
    return tempArr;
  }

  log() {
    console.log(this.buckets, this.buckets.length);
  }
}
