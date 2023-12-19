
/**
 * @param {any} data
 * @return {string}
 */
function stringify(data) {
    if([NaN, undefined, null, Infinity].includes(data)) return 'null'
    let type = typeof data
    switch(type){
     case 'function': return undefined
     case 'bigint': throw Error('bigint are not supported!');
     case 'string' : return `"${data}"`;
     case 'object' : {
       if(Array.isArray(data)){
         return `[${data.map((d) => typeof d === 'symbol' ? 'null' : stringify(d)).join()}]`;
       }
       if (data instanceof Date) {
           return `"${data.toISOString()}"`;
       }
       return '{' + Object.keys(data).filter((key) => data[key]!== undefined).map((key) => `"${key}":${stringify(data[key])}`).join() + '}'
     };
     default: return String(data)
    }
   }