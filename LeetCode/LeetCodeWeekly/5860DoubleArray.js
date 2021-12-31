const arr = [0, 3, 2, 4, 6, 0];

const findOriginalArray = (changed) => {
  const final = [];
  const copy = [...changed];
  if (changed.length === (0 || 1)) return [];
  let sorted = changed.sort((a, b) => a - b);
  for (let i = 0; i < changed.length / 2; i++) {
    if (sorted[i] === 0 && sorted[i + 1] === 0 && sorted.length > 1) {
      final.push(sorted[i]);
      let val = sorted.splice(0, 2);
      if (sorted.length === 0 && final.length === copy.length / 2) {
        return final;
      }
      i--;
    } else if (sorted[i] === 0 && sorted[i + 1] !== 0 && sorted.length > 1) {
      return [];
    } else if (sorted.includes(sorted[i] * 2)) {
      final.push(sorted[i]);
      sorted = sorted.filter(
        (element) => element !== sorted[sorted.indexOf(sorted[i] * 2)]
      );
    } else return [];
  }
  console.log(final);
  if (final.length === copy.length / 2) return final;
  else return [];
};

console.log(findOriginalArray(arr));
