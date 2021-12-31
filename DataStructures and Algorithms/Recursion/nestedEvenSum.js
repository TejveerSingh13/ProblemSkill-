const nestedEvenSum = (obj) => {
    var total = 0
    Object.values(obj).map(d => {
        if (typeof d === 'object') total += nestedEvenSum(d)
        else if (typeof d === 'number' &&  d%2 === 0) total += d
    })
    return total
}
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
console.log(nestedEvenSum(obj1))