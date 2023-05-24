const collectStrings = (obj) => {
    var arr = []
    for (const key in obj) {
        if(typeof obj[key] === 'string') {
            arr.push(obj[key])
        }
        else if(typeof obj[key] === 'object'){
            arr = arr.concat(collectStrings(obj[key]))
            }
    }
    return arr
}
const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
console.log(collectStrings(obj1))