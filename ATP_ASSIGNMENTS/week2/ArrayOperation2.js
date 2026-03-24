/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran */
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
console.log("student marks above 40:\n",students.filter(obj=>obj.marks>40))
students.map((obj)=>{if(obj.marks>=90) return obj.grade='A'
                                else if(obj.marks>=75) return obj.grade='B'
                                else if(obj.marks>=60) return obj.grade='C'
                                else return obj.grade='D'
                                }
                            
                            )
console.log("students with grades fields:\n",students)
console.log("Students average marks:\n",(students.reduce((acc,obj)=>acc=acc+obj.marks,0))/students.length)
console.log("student who scored 92:\n",students.find(obj=>obj.marks==92))
console.log("index of student kiran:\n",students.findIndex(obj=>obj.name=="Kiran"))