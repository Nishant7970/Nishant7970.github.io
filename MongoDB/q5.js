//updation

db.employees.updateOne({name:"Rakesh"},{$set:{name:"Rakesh Kumar",salary:100000}}) //update document with name Rakesh to Rakesh Kumar and salary to 100000

db.employees.updateMany({department:"Engineering"},{$set:{department:"Software Engineering"}}) //update all documents with department Engineering to Software Engineering

db.employees.updateMany({},{$set:{point:1}}) //add point field with value 1 to all documents

db.employees.updateMany({},{$rename:{point:"score"}}) //point replace with score

db.employees.updateMany({department:"Software Engineering"},{$inc:{point:1}}) //increment point field by 1 for all documents with department Software Engineering

db.employees.updateMany({department:"Software Engineering"},{$inc:{point:-1}}) //decrement point field by 1 for all documents with department Software Engineering

db.employees.updateOne({email:"abc@gmail.com"},{$set:{name:"abc",salary:100000}},{upsert:true}) //

db.employees.deleteOne({name:"abc"}) //delete document with name abc
db.employees.deleteMany({department:"Software Engineering"}) //delete all documents with department Software Engineering

db.employees.find().sort({name:1}) //sort documents by name in ascending order
db.employees.find().sort({name:-1}) //sort documents by name in descending order

db.employees.find().sort({salary:-1}).limit(1) //find document with highest salary

db.employees.updateMany({},{$push:{points:3}}) //add points field and push value [3]

db.employees.updateMany({},{$pull:{points:{$gt:3}}}) //delete element from point greater than 3

db.employees.updateMany({},{$addToSet:{location:"Los Angles"}}) // similar to push but add uniquelly if exist not add 

db.employees.updateMany({},{$pop:{location:1}}) //remove last element from location
db.employees.updateMany({},{$pop:{location:1}}) // remove first element from location