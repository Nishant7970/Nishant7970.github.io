db.employees.find({name:{$regex: "Nishant"}}) //find all documents with name Nishant

db.employees.find({name:{$regex: "Nishant", $options: "i"}}) //find all documents with name Nishant case insensitive
