/// delete


db.instructors.deleteOne({_id:{$gt:99}})
db.instructors.insertOne({_id:200})

db.instructors.deleteMany({_id: {$gt:100}}) ///