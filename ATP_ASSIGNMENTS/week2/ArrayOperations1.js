/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data :
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard" */
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
console.log("instock products:\n",cart.filter(pro=>pro.inStock))
let newArray=cart.map(obj=>{return {name:obj.name,totalPrice:obj.price*obj.quantity}})
console.log("new array:\n",newArray)
console.log("total cart value:\n",cart.reduce((acc,obj)=>acc=acc+(obj.price*obj.quantity),0))
console.log("details of mouse:\n",cart.find(obj=>obj.name=="Mouse"))
console.log("position of Keyboard:\n",cart.findIndex(obj=>obj.name=="Keyboard"))