db.employees.insertMany([
  {
    name: "Aman",
    email:"aman@gmail.com",
    department:  "Android",
    salary: 100000,
    location:["India", "Japan"],
    date:Date(),
  },
  { 
    name: "Rakesh",
    email:"rakesh@gmail.com",
    department: "Devops",
    salary: 90000,
    location:["India", "USA"],
    date:Date(),
  },
  ]);

  db.employees.find({department:{$in:["devops","Android"]}},{name:1}) // find documents with department in devops or Android and show only name field
  db.employees.find({department:{$nin:["devops","Android"]}},{name:1}) // find documents with department not in devops or Android and show only name field
  