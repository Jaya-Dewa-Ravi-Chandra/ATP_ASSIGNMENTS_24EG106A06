/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
 */
const courses = ["javascript", "react", "node", "mongodb", "express"];

console.log("Courses with name lenghth>5:\n",courses.filter(ele=>ele.length>5))
a=courses.map(ele=>ele.toUpperCase())
console.log("Upper case course names:\n",a)
console.log("Single String:",a.reduce((acc,ele)=>acc+=` | ${ele}`))
console.log("react course:",courses.find(ele=>ele=="react"))
console.log("Index of node:",courses.findIndex(ele=>ele=="node"))