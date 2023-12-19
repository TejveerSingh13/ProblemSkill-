/**
 * @param {string} str
 * @return {object | Array | string | number | boolean | null}
 */
function parse(str) {
    //Base Case
    if(str === '') throw Error()
    if(str[0] === "'") throw Error()
    if(str === 'null') return null
    if(str === '{}') return {}
    if(str === '[]') return []
    if(str === 'true') return true
    if(str === 'false') return false
    if(str[0] === '"') return str.slice(1, -1)
    if(+str === +str) return Number(str) 
    //Object and array
    if(str[0] === '{') {
      return str.slice(1,-1).split(',').reduce((acc, item) => {
        let index = item.indexOf(':')
        let key = item.slice(0, index)
        let val = item.slice(index+1)
        acc[parse(key)] = parse(val)
        return acc
      },{})
    }
    if(str[0] === '['){
      return str.slice(1,-1).split(',').map((val) => parse(val))
    }
  }