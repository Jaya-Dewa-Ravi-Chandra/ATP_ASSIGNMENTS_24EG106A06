const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

//inserting new emp at 2nd position
employees.splice(1,0,{eno:102,name: "Dewa",marks: [90,91,99]})

//deleting entry with name kiran
for(let x in employees){
    if(employees[x].name=="Kiran")
        employees.splice(x,1)
}

//deleting last element of marks in the entry with name Sneha
for(let y of employees){
    if(y.name=="Sneha")
        y.marks.splice(2,1,75)
}

console.log(employees)
