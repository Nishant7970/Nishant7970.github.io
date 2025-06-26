db.employees.find({salary:{$gt:80000}},{_id:0 ,name:1})
db.employees.find({salary:{$gt:80000}},{_id:0 ,name:1}).limit(2) //only 2 document will visible
db.employees.find({salary:{$gt:80000}},{_id:0 ,name:1}).limi(2).skip(1) //skip 1 one and 2 document will get visible

 db.employees.countDocuments() //show total no. of document in employees

//aggregation pipeline..
db.employees.aggregate([
    {$match:{salary:{$gt:80000}}},
    {$project:{name:1,salary:1}},
])

db.employees.aggregate([
    {$match:{salary:{$gt:80000}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:1}}
])

db.employees.aggregate([
    {$match:{salary:{$gt:80000}}},
    {$project:{name:1,salary:1}},
    {$sort:{name:1}},
    {$limit:1}
])

db.employees.aggregate([
    {$match:{salary:{$gt:80000}}},
    {$project:{name:1,salary:1,location:1}},
    {$sort:{name:1}},
    {$limit:1}
])

db.employees.aggregate([
    {$project:{_id:0,name:1,location:1}},
    {$unwind:"$location"}
])

db.employees.aggregate([
    {$project:{_id:0,name:1,salary:1,bonus:{$multiply:["$salary",2]}}},
    
])


db.employees.aggregate([
    {$group:{_id:"department",total:{$sum:"$salary"}}},
    
])
db.employees.aggregate([
    {$group:{_id:null,total:{$sum:"$salary"}}},
    
])

db.employees.aggregate([
    {$group:{_id:{department:"$department",name:"$name"},total:{$sum:"$salary"}}}
])
db.employees.aggregate([
    {$lookup:{from:"order",localField:"_id",foreignField:"empid",as:"order"}},
    {$unwind:"$order"}
])
db.employees.aggregate([
    {$lookup:{from:"order",localField:"_id",foreignField:"empid",as:"order"}},
    {$unwind:"$order"},
    {$project:{name:1,"order.orderValue":1}}
])
db.employees.aggregate([
    {$lookup:{from:"order",localField:"_id",foreignField:"empid",as:"order"}},
    {$unwind:"$order"},
    {$project:{salary:1,name:1,"order.orderValue":1}},
    {$match:{salary:{$gt:1000}}}
])

//for observe TotalDocsExamined
db.employees.createIndex({"email":1})
db.employees.getIndexes()
db.employees.dropIndex("email_1")
db.employees.find({email:"nishant@gmail.com"}).explain("executionStats")