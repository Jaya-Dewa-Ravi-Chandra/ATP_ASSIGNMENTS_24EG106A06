//function for searching an element in an array
function search(arr,key){
    for(let i=0;i<arr.length;i++)
        if(key==arr[i])
            return i
    return "not found"
}
console.log(search([90,45,65,78,96],65))