function KMP(str, pattern) {
  let lps = findLPS(pattern);
  let i = 0,
    j = 0,
    count = 0;

  while (i < str.length) {
    if (str[i] == pattern[j]) {
      i++;
      j++;
    } else {
      if (j == 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }
    if (j == pattern.length) {
      //depending on what to do next change code here
      // This specific is for Leet - 3036 Number of Subarrays That Match a Pattern II
      count++;
      j = lps[j - 1];
    }
  }
}

function findLPS(pattern) {
  if (pattern == "") return 0;
  let lps = new Array(pattern.length).fill(0);
  let prevLps = 0,
    i = 1;
  while (i < pattern.length) {
    if (pattern[i] == pattern[prevLps]) {
      lps[i] = prevLps + 1;
      prevLps += 1;
      i += 1;
    } else if (prevLps == 0) {
      lps[i] = 0;
      i += 1;
    } else {
      prevLps = lps[prevLps - 1];
    }
  }
  return lps;
}
