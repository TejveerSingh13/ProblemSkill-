class Observable {
  constructor(setup) {
    this._setup = setup;
  }

  subscribe(subscriber) {
    const subWrapper = {
      unsubscribed: false,
      next(value) {
        if (this.unsubscribed) return;
        if (subscriber instanceof Function) return subscriber(value);
        subscriber.next ? subscriber.next(value) : null;
      },
      error(err) {
        if (this.unsubscribed) return;
        this.unsubscribe();
        subscriber.error ? subscriber.error(err) : null;
      },
      complete() {
        if (this.unsubscribed) return;
        this.unsubscribe();
        subscriber.complete ? subscriber.complete() : null;
      },
      unsubscribe() {
        this.unsubscribed = true;
      },
    };
    this._setup(subWrapper);
    return subWrapper;
  }
}
