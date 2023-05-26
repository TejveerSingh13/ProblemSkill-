const word = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];

// here w1 length is < w2 length
const stringCompare = (w1, w2) => {
  for (let i = 0; i < w1.length; i++) {
    if (w2.includes(w1[i])) return false;
  }
  return true;
};

const maxProduct = (words) => {
  let max = 0;
  let j = 0;
  while (j < words.length - 1) {
    let word1 = words[j];
    let i = j + 1;
    while (i < words.length) {
      if (word1.length <= words[i].length) {
        if (stringCompare(word1, words[i])) {
          if (words[i].length * word1.length > max)
            max = words[i].length * word1.length;
        }
      } else {
        if (stringCompare(words[i], word1)) {
          if (words[i].length * word1.length > max)
            max = words[i].length * word1.length;
        }
      }
      i++;
    }
    j++;
  }
  return max;
};

console.log(maxProduct(word));
// console.log(stringCompare("baz", "abcw"));
