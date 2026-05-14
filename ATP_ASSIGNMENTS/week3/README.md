db.employees.insertMany([
   {
              empId:101,
              name:"priya",
              skills:["react","MongoDB","html"],
              experiences:[
                     {
                            companyName:"Google",
                            yearsOfExp:2
                     }
              ]
       },
{
              empId:102,
              name:"arjun",
              skills:["angular","html","MySQL"],
              experiences:[
                     {
                            companyName:"TCS",
                            yearsOfExp:2
                     },
                {
                            companyName:"Amazon",
                            yearsOfExp:3
                     }
              ]
       },
{
              empId:103,
              name:"vikas",
              skills:["react","angular","MongoDB","HTML"],
              experiences:[
                     {
                            companyName:"Wipro",
                            yearsOfExp:3
                     },
                     {
                            companyName:"Dell",
                            yearsOfExp:3
                     }
              ]
       },
{
              empId:104,
              name:"lisa",
              skills:["html","TailwindCSS","JS"],
              experiences:[
                     {
                            companyName:"Hathway",
                            yearsOfExp:3
                     }
              ]
       },
{
              empId:105,
              name:"bob",
              skills:["MongoDB","react","node","express"],
              experiences:[
                     {
                            companyName:"JPMC",
                            yearsOfExp:4
                     }
              ]
       }


])


db.employees.find()

db.employees.updateOne({name:"vikas"},{$pull:{skills:"MongoDB"}})

db.employees.find({skills:"react"})

db.employees.updateOne({name:"vikas"},{$push:{experiences:{companyName:"Infosys",yearsOfExp:2}}})

db.employees.deleteOne({empId:102})

db.employees.find()
