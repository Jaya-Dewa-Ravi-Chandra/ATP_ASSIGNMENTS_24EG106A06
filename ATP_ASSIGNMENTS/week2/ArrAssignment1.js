/*Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
const temperatures = [32, 35, 28, 40, 38, 30, 42];
console.log('above 35 degrees',temperatures.filter(element=>element>35))
console.log('celsius to fahrenheit',temperatures.map(element=>(element*18)/5))
console.log('avg temperature',temperatures.reduce((accumulator,element)=>accumulator=accumulator+element)/temperatures.length)
console.log('first temperature above 40',temperatures.find(element=>element>40))
console.log('index of element 28',temperatures.findIndex(element=>element==28))