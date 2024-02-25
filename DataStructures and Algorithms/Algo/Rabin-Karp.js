// for only lower english alphabets
function rabinKarp(text, pattern) {
  const BASE = 26; //Base for the hash
  const PRIME = 997;

  const patternL = pattern.length;
  const textL = text.length;

  let patternHash = 0,
    textHash = 0;
  let h = 1; //important used in rolling hash

  for (let i = 0; i < patternL; i++) {
    patternHash = (BASE * patternHash + pattern.charCodeAt(i)) % PRIME;
    textHash = (BASE * textHash + text.charCodeAt(i)) % PRIME;
    h = (BASE * h) % PRIME;
  }

  //Main sliding logic
  for (let i = 0; i <= textL - patternL; i++) {
    if (patternHash == textHash) {
      let match = true; // make it mark true
      // verify if its really matched and not sparse
      for (let j = 0; j < patternL; j++) {
        if (text[i + j] != pattern[j]) {
          match = false;
          break;
        }
      }
      if (match) return true; //Logic can be updated accroding to what is asked
    }
    if (i < textL - patternL) {
      textHash =
        (BASE * (textHash - text.charCodeAt(i) * h) +
          text.charCodeAt(i + patternL)) %
        PRIME;
      if (textHash < 0) textHash += PRIME;
    }
  }
  return false;
}
