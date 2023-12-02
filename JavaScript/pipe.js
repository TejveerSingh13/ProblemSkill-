function pipe(funcs) {
	return function(arg){
		let result = arg
		for(let fuc of funcs){
			result = fuc(result)
		}
		return result
	}
}
// Check README for implementation and usage!