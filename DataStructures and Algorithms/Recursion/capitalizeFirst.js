const capitalizeFirst = (arr) => {
    console.log(arr[0].toUpperCase());
    const str = arr[0]
    if (arr.length === 1) return [str[0].toUpperCase() + str.slice(1)]
    return [str[0].toUpperCase() + str.slice(1)].concat(capitalizeFirst(arr.slice(1)))
}
// console.log(capitalizeFirst(['car', 'bike', 'truck']))
capitalizeFirst(['car', 'bike', 'truck'])