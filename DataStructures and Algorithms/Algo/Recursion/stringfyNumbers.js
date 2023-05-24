const stringfyNumbers = (obj) => {
    let objN = {}
    for (var d in obj) {
        if( typeof obj[d] === 'number') objN[d] = obj[d].toString();
        else if(typeof obj[d] === 'object' && !Array.isArray(obj[d])) objN[d] = stringfyNumbers(obj[d])
        else objN[d] = obj[d]
    }
    return objN
}
let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringfyNumbers(obj1))