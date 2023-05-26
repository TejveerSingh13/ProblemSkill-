const height = [0,2]
let maxArea = 1
for (let i = 0; i < height.length-1; i++) {
    for (let j = i+1; j < height.length; j++) {
        if (height[i] >= height[j]) {
            let area = height[j]*(j-i)
            if (area > maxArea) {
                maxArea = area
            }
        }
        else{
            let area = height[i]*(j-i)
            if (area > maxArea) {
                maxArea = area
            }
        }
    }
}
console.log(maxArea)