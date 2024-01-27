/*
 * the observer pattern is basically 1 : n pattern where we have
 * 1-Subject and n-Observers
 */
function Subject() {
  //basically a list to keep track of observers that want to observe the Subject
  this.observers = [];
}

//adding methods
Subject.prototype = {
  // take in a function which is going to be an observer function
  // this fucntion subscribe to Subject
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  // to unsubscribe or remove the observer function
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) return fn;
    });
  },

  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};
