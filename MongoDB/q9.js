//condition to check if salary is greater than 90000 and assign Grade A or B
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Grade: {
        $cond: [
          { $gt: ["$salary", 90000] },
          "Grade A",
          "Grade B"
        ]
      }
    }
  }
])


//if then else
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      Grade:{$cond:{
        if:{ $gt: ["$salary", 90000] },
        then: "Grade A",
        else: "Grade B"
      }}
    }
  }
])