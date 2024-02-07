/**
 * @param {number} period
 * @return {Observable}
 */
function interval(period) {
  // your code here
  return new Observable((sub) => {
    let count = 0;
    setInterval(() => {
      sub.next(count++);
    }, period);
  });
}
