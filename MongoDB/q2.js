// Crud Operation

db.employees.insertOne({
  name: "Nishant",
    age: 20,
  position: "Software Engineer",
  department: "Engineering",
  salary: 80000,
  dateOfJoining: new Date("2020-01-15"),
  isActive: true
});

db.employees.insertMany([
  {
    name: "Nishant",
    email:"nishant@gmail.com",
    department:  "Engineering",
    salary: 100000,
    location:["India", "Japan"],
    date:Date(),
  },
  { 
    name: "Nishu",
    email:"nishu@gmail.com",
    department: "Design",
    salary: 90000,
    location:["India", "USA"],
    date:Date(),
  },
  ]);

// db.employees.find() //show all documents in employees collection
  // db.employees.find({},{name:1}) // only name field will be shown
  // db.employees.find({name:"Nishant"}) //find document with name Nishant
  // db.employees.find({},{_id:0,name:1}) //it will not show id field and will show name field
//db.employees.drop() //employees collection will be deleted
//show Collections