function flat(arr, depth = 1) {
    // your imeplementation here
    if (depth <= 0) return arr
    return arr.reduce((acc, current) => {
      if(Array.isArray(current)) acc.push(...flat(current, depth-1))
      else acc.push(current)
      return acc
    }, [])
  }

  /**
   * const arr = [1, [2], [3, [4]]];
   * flat(arr, 1) => [1, 2, 3, [4]]
   * flat(arr, Infinity) => [1, 2, 3, 4]
   */