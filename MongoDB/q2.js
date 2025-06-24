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