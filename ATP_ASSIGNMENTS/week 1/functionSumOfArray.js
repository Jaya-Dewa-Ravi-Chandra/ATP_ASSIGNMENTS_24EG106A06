//function for sum of array
let sumof=function(arr){ 
    let sum=0
    for(let i=0;i<arr.length;i++)
        sum+=arr[i]
    return sum
}
console.log(sumof([10,20,30,40]))