//min of array
let arr=[98,75,65,98]
let min=arr[0]
for(let i=0;i<arr.length;i++)
    min=min<arr[i]?min:arr[i]
console.log(min)