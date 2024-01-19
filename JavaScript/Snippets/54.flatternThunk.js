function flattenThunk(thunk) {
  // your code here
  return function (callback) {
    thunk(function (error, data) {
      if (error) {
        callback(error);
      } else if (typeof data == "function") {
        flattenThunk(data)(callback);
      } else {
        callback(undefined, data);
      }
    });
  };
}
