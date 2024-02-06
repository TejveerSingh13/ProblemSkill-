// You can use Observer which is bundled to your code

// class Observer {
//   // subscriber could one next function or a handler object {next, error, complete}
//   constructor(subscriber) { }
//   next(value) { }
//   error(error) { }
//   complete() {}
// }
// the subject are getting observer as a parameter if not we convert it to an observer

class Subject {
  constructor() {
    this.subjects = [];
  }
  subscribe(subscriber) {
    let sub = new Observer(subscriber);
    this.subjects.push(sub);
    return {
      unsubscribe: () => {
        this.subjects = this.subjects.filter((s) => s != sub);
      },
    };
  }
  next = (value) => {
    this.subjects.forEach((sub) => {
      sub.next(value);
    });
  };
  error = (err) => {
    this.subjects.forEach((sub) => {
      sub.error(err);
    });
  };
  complete = () => {
    this.subjects.forEach((sub) => {
      sub.complete();
    });
  };
}
