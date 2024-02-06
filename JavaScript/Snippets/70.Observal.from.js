/**
 * @param {Array | ArrayLike | Promise | Iterable | Observable} input
 * @return {Observable}
 */
function from(input) {
  // your code here
  if (input instanceof Observable) {
    return observableObservable(input);
  }
  if (input instanceof Promise) {
    return promiseObservable(input);
  }
  if (Array.isArray(input) || typeof input[Symbol.iterator] === "function") {
    return iteratorObservable(input);
  }
  if ("length" in input) {
    return arrayObservable(input);
  }
  throw new Error("In-valid input type!");
}

function observableObservable(input) {
  return input;
}

function promiseObservable(input) {
  return new Observable((sub) => {
    input
      .then(
        (resolve) => {
          sub.next(resolve);
        },
        (reject) => {
          sub.error(reject);
        }
      )
      .then(() => {
        sub.complete();
      });
  });
}

function arrayObservable(input) {
  return new Observable((sub) => {
    for (let i = 0; i < input.length; i++) {
      sub.next(input[i]);
    }
    sub.complete();
  });
}

function iteratorObservable(input) {
  return new Observable((sub) => {
    try {
      for (let ele of input) {
        sub.next(ele);
      }
    } catch (err) {
      sub.error(err);
    }
    sub.complete();
  });
}
