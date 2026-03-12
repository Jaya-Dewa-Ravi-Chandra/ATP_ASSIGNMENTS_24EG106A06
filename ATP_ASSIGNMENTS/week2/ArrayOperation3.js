
/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
console.log('IT department employees;\n',employees.filter(obj=>obj.department=="IT"))
employees.map(obj=>obj.netSalary=obj.salary+obj.salary*0.1)
console.log('employees with netsalary:\n',employees)
console.log('Total payout:',employees.reduce((acc,obj)=>acc=acc+obj.netSalary,0))
console.log('employee with 3000 salary:\n',employees.find(obj=>obj.salary=3000))
console.log('employee index of Neha',employees.findIndex(obj=>obj.name=="Neha"))