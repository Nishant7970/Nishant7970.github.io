db.post.insertMany([
    {_id:"p1",post:"MongoDB is a NoSQL database"},    
    {_id:"p2",post:"NodeJS is a JavaScript runtime"},
])
db.comments.insertMany([
    {_id:"c1",postId:"p1",comment:"MongoDB is great for unstructured data"},
    {_id:"c2",postId:"p1",comment:"I love MongoDB's flexibility"},
    {_id:"c3",postId:"p2",comment:"NodeJS is perfect for building APIs"},
    {_id:"c4",postId:"p2",comment:"NodeJS has a great ecosystem"},
    {_id:"c5",postId:"p2",comment:"I prefer NodeJS for real-time applications"},
])

db.post.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "postId",
      as: "comments"
    }
  },
  {
    $project: {
      _id: 0,
      post: 1,
      comments: "$comments.comment"
    }
  }
])
 
db.post.aggregate([
    {
        $lookup: {
        from: "comments",
        localField: "_id",
        foreignField: "postId",
        as: "comments"
        }
    },
    {
        $project: {
        _id: 0,
        post: 1,
        comments: "$comments.comment"
        }
    },
    {
        $unwind: "$comments"
    }
    ])

    
    db.comments.insertMany([
        {_id:"c6",postId:"p1",comment:"I love MongoDB's flexibility"},
    ])