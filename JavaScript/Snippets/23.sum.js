/**
 * @param {number} num
 */
function sum(num) {
    // Important code
    const func = (num2) => {
      return num2 ? sum(num+num2) : num
    }
    func.valueOf = () => num
    return func
  }
  