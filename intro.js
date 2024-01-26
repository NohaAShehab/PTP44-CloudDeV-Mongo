/// commands
//1- to connect to new database
// use databasename

// 2- create our first collection that contains documetns 

/// in mongosh // robo3t ---> js env. ----> 
// db.courses.insertOne({"name":"mongo", max_score:100})// create collection and document into one line 


// 

// db.students.insertOne({"fname":"mohamed", lastname:"hassan"})

// db.students.insertOne({"fname":"lina", lastname:"mohamed", _id:10}) // bson ---> wiredTiger engine 



/// list all collections 
show collections

/// create collection 
db.createCollection("instructors")


/// show collection info  /// show create database ?
db.getCollectionInfos({name:"instructors"}) /// env --> js --> object 



// drop collection 

db.courses.drop()



















