db.employees.find()  // show all documents in employees collection
db.employees.find().skip(1) //skip first document
db.employees.find().limit(1) //show only 1 documents
db.employees.find().skip(1).limit(1) //it shows 2nd document
db.employees.find({department: "Engineering"}) //find documents with department Engineering
db.employees.find({department:{$eq:"Engineering"}},{_id:0,name:1}) //find documents with department Engineering and show only name field
db.employees.find({salary:{$gt:2000}},{_id:0,name:1,salary:1}) //find documents with salary greater than Engineering and show only name and salary fields

db.employees.find({salary:{$gt:2000,$lt:100000}},{_id:0,name:1,salary:1}) //find documents with salary greater than 2000 and less than 100000 and show only name and salary fields
 