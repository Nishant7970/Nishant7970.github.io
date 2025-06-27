db.marks.insertMany([
    {name: "John", term:1, subject: "Maths", score: 85},
    {name: "John", term:2, subject: "Maths", score: 90},
    {name: "John", term:3, subject: "Maths", score : 88},
    {name: "John", term:1, subject: "Science", score: 92},
    {name: "John", term:2, subject: "Science", score: 80},
    {name: "John", term:3, subject: "Science", score: 87},
    {name: "Cathy", term:1, subject: "Maths", score: 95},
    {name: "Cathy", term:2, subject: "Maths", score: 90},
    {name: "Cathy", term:3, subject: "Maths", score : 92},
    {name: "Cathy", term:1, subject: "Science", score: 88},
    {name: "Cathy", term:2, subject: "Science", score: 85},
    {name: "Cathy", term:3, subject: "Science", score: 90},
])

db.marks.aggregate([
    {
        $group: {
            _id: "$name",
            averageScore: { $avg: "$score" },
        }
    },{$sort:{_id:1}}

])


db.marks.aggregate([
    {
        $group: {
            _id: "$term",
            averageScore: { $avg: "$score" },
        }
    },{$sort:{_id:-1}}
    
])

db.marks.aggregate([
    {
        $group: {
            _id: "$subject",
            averageScore: { $avg: "$score" },
        }
    }
])

db.marks.aggregate([
    {
        $group: {
            _id: {term: "$term", subject: "$subject"},
            averageScore: { $avg: "$score" },
        }
    }
])

db.marks.aggregate([
  {
    $match: { name: "John" }
  },
  {
    $group: {
      _id: {term:"$term" , name: "$name"},
      averageMarks: { $avg: "$score" }
    }
  },
  {
    $sort: { _id: 1 }
  }
])

db.marks.aggregate([
    {$rename:{"_id":"sId"}},
])



db.studentInfo.insertMany([
    {_id:"s1",name:"John",},
    {_id:"s2",name:"Cathy",},
])


db.studentInfo.aggregate([
    {        $lookup: {
        from: "marks",
        localField: "_id",
        foreignField: "sid",
        as: "marks"
      }
    },
    {
      $unwind: "$marks"
    },
    {$group: {_id:"$marks.term", averageScore: {$avg:"$marks.score"}}},
    ])