/// one to many relationship 
// 1- referece to the document 
/**
    in students collection  --> add field --> departement ====> value refers to _id in departments collection
    /// data size reduced 
    {
    "_id" : 1.0,
    "firstName" : "Ahmed",
    "lastName" : "Ali",
    "department" : 1.0,
    }
    /// integrity constriants 
    // data retrevail  ====> joining ---> time consuming process 
    
    /// reference approach 
    
    {
    "_id" : 1.0,
    "firstName" : "Ahmed",
    "lastName" : "Ali",
    "department" : {
        _id: 1 , 
        name: "opensource"
    
        } /// data ---> needed according to business need ---> data 90% will not be changed
    }
    
    
    
    
*/




// 2- embedded object 


/***

   {
    "_id" : 1.0,
    "firstName" : "Ahmed",
    "lastName" : "Ali",
    "department" : {
            "_id" : 3.0,
            "name" : "ai",
            "location" : "1stfloor",
            "phone" : 12345.0
    }
}
    
*/



/*****
Many to Many relationship
/// ---> students (_id, name ), subjects (_id, name )

1- students (_id, name ), subjects (_id, name ), std_sub (_sub_id , _std_id, exam_score )

2- students (_id, name, subjects: [_id , _id] ), subjects (_id, name )  # data reterival

3- students (_id, name ), subjects (_id, name, students : [_ids, _ids] )  # data reterival

4- students (_id, name, subjects: [{},{}, {} ), subjects (_id, name )  /// size  --> update ,

5- students (_id, name ), subjects (_id, name, students: [{}, {}, {}] )  /// size  --> update ,


6- 
students (_id, name, subjects: [_id , _id] ), subjects (_id, name )  # data reterival
students (_id, name ), subjects (_id, name, students : [_ids, _ids] )  # data reterival









***/


// /*********************************************************************///

/// print fristname, lastname, deptanme ---> students collection 

db.students.find({
        department:{$exists:true}
    }, {
        department:1 , firstName:1, lastName:1
 }).forEach((document)=>{
     
//      print(`${document.firstName} ${document.lastName} ${document.department}`)
     
     dept = db.departments.findOne({_id:document.department}, {name:1,_id:0})
//      print(dept)
     
     print(`${document.firstName} ${document.lastName} ${dept.name}`)

     
 }) /// performance wise ---



///  ===> check this 

depts = db.departments.find({}, {_id:1, name:1}).toArray() // array
print(depts)
db.students.find({
        department:{$exists:true}
    }, {
        department:1 , firstName:1, lastName:1
 }).forEach((document)=>{
     // filter dept ==> id == document.dept
     
     /// find ---> array 
     
     dept = depts.find(dept=>dept._id==document.department)
     
   
    
  if (dept){
          print(`${document.firstName} ${document.lastName}: ${dept.name}`)
         
      }else{
           print(`${document.firstName} ${document.lastName}: nodept`)
          
          
        }
     
     
 })
// 
// 

db.students.insertOne(  {"_id":100, "firstName": "Ahmed", 
    "lastName":"Ali", 
    "addresses": [
        { "city": "mansoura", "street":10 },
        { "city": "cairo", "street":20}],

        "department":0, 
        "subjects": [1,2,5] 

    })
 
 

 
 depts = db.departments.find({}, {_id:1, name:1}).toArray() // array

 db.students.find({
        department:{$exists:true}
    }, {
        department:1 , firstName:1, lastName:1
 }).forEach((document)=>{
     
    mydept=depts.find((element)=> element._id== document.department)
//      print(`My dept = ${mydept}`)
     if (mydept){
   print(`${document.firstName} ${document.lastName}: ${mydept.name}`)

    }else{
   print(`${document.firstName} ${document.lastName}: NoDept`)
        }
 })
 
 
 
 
 
 //**************************** Get student and their subjects **********************/
 
 allsubjects = db.subjects.find({}, {name:1}).toArray()
 db.students.find({
     subjects: {$type:"array"}
     },{
         firstName:1, lastName:1 , subjects:1     
    }).forEach((document)=> {
        
        doc_sub = document.subjects
//         print(doc_sub) 
        std_sub = ''
        
        doc_sub.forEach((sub)=> {
            
           subname =allsubjects.find((elem)=> elem._id==sub)
            std_sub += subname.name + " "
            })
        
     print(`${document.firstName}:  ${std_sub}`)
        
        
 })
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 









































