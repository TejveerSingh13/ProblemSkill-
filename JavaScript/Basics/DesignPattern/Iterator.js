function Iterator(items) {
  (this.item = items), (this.index = 0);
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.item.length;
  },
  next: function () {
    return this.item(this.index++);
  },
};

let iter = new Iterator([1, 2, 3, 4, 5]);

while (iter.hasNext()) {
  console.log(iter.next());
}
