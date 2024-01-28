// /************************* Aggregation*********************************/

db.instructors.aggregate() /// apply different stages on the data 


db.instructors.aggregate([]) /// apply different stages on the data 

//// //************** get data match condition*********************//
db.instructors.aggregate([
{
    $match : {age: {$gt:21}}
} /// first stage 



])

/// *********************** get instructrors age> 21 , sort data firstname ********************************/

db.instructors.aggregate([
{
    $match : {age: {$gt:21}}
} , /// first stage 
{
        $sort : {firstName:1 , lastName:1}
    
 } /// second stage --> sorting data 


])


/// ********************************* projection ****************************************


db.instructors.aggregate([
{
    $match : {age: {$gt:21}, lastName:{$exists:true}}
} , /// first stage 
{
        $sort : {firstName:1 , lastName:1}
    
 },  /// second stage --> sorting data 
{
    
    $project: {firstName:1 , lastName:1 , salary:1, age:1}
    
 } // projection

])


/////// control resulted document structure 
 
 
 db.instructors.aggregate([
{
    $match : {age: {$gt:21}, lastName:{$exists:true}}
} , /// first stage 
{
        $sort : {firstName:1 , lastName:1}
    
 },  /// second stage --> sorting data 
{
    
    $project: { 
            fullname: {$concat: ["$firstName", ' ', "$lastName"]}, 
            age: 1, 
            sal: "$salary", 
            netsalary:{$multiply : ["$salary", .8]
                
            }
        
        } /// control document architecture 
    
 } // projection

])
 
//// ************* save out of stage to another collection ************************////
 
 
 
  
 db.instructors.aggregate([
{
    $match : {age: {$gt:21}, lastName:{$exists:true}}
} , /// first stage 
{
        $sort : {firstName:1 , lastName:1}
    
 },  /// second stage --> sorting data 
{
    
    $project: { 
            fullname: {$concat: ["$firstName", ' ', "$lastName"]}, 
            age: 1, 
            sal: "$salary", 
            netsalary:{$multiply : ["$salary", .8]}, 
//             _id:0 /// don't do this 
        
        } /// control document architecture 
    
 },  // projection
 {
   $out: "instructors_info"   
     
  }

])
 
 
 /*****************  group data **********************************/
 
 // --> get ages of instructor  ---> no_of instructor have same age 
 
 
 db.instructors.aggregate(
  [
  
    {
      $match : {age: {$gt:20}}   
    } ,
    {
        
        $group : {  
            _id : "$age"   /// sepecify field of grouping 
         }
        
     } // stage --> no of instructor per age 
  
  
  
  ])
 
  
 db.instructors.aggregate(
  [
    {
      $match : {age: {$gt:20}}   
    } ,
    {
        
        $group : {  
            _id : "$age" ,  /// sepecify field of grouping 
            total : {$sum: 1},   /// $sum  -->  value 1 ---> count
            total_Ages : {$sum : "$age"} /// $sum -> age 
         }
        
     } // stage --> no of instructor per age 
  
  
  
  ])    
     
  
   db.instructors.aggregate(
  [
    {
      $match : {age: {$gt:20}}   
    } ,
    {
        
        $group : {  
            _id : "$age" ,  /// sepecify field of grouping 
            total : {$sum: 1},   /// $sum  -->  value 1 ---> count
            total_Ages : {$sum : "$age"},  /// $sum -> age 
            total_salary: {$sum: "$salary"}, 
            min_salary: {$min: "$salary"}, 
            max_salary: {$max : "$salary"}, 
            avg_salary: {$avg: "$salary"}
         }
        
     } // stage --> no of instructor per age 
  
  
  
  ])      
    
    
 db.instructors.aggregate(
  [
    {
      $match : {age: {$gt:20}}   
    } ,
    {
        
        $group : {  
            _id : "$age" ,  /// sepecify field of grouping 
            total : {$sum: 1},   /// $sum  -->  value 1 ---> count
            total_Ages : {$sum : "$age"},  /// $sum -> age 
            total_salary: {$sum: "$salary"}, 
            min_salary: {$min: "$salary"}, 
            max_salary: {$max : "$salary"}, 
            avg_salary: {$avg: "$salary"}, 
           
         }
        
     } // stage --> no of instructor per age 
  
  
  
  ])    
    
    
    /*********** instructors with same age and same city ***************/
 db.instructors.aggregate(
  [
    {
      $match : {age: {$gt:20}}   
    } ,
    {
        
        $group : {  
            /// instructor city Mansoura and age: 21
            _id : {"age": "$age", "city": "$address.city"} ,  /// sepecify field of grouping 
            total : {$sum: 1},   /// $sum  -->  value 1 ---> count
            total_Ages : {$sum : "$age"},  /// $sum -> age 
            total_salary: {$sum: "$salary"}, 
            min_salary: {$min: "$salary"}, 
            max_salary: {$max : "$salary"}, 
            avg_salary: {$avg: "$salary"}, 
           
         }
        
     } // stage --> no of instructor per age 
 
  ])    
     
     
// /// ***************** aggregation --> joins ********************************//
     
     
/// student , dept name 
     
db.students.aggregate([  
     {
         $lookup: {
             from: "departments", /// collection name I need dept name from
             localField: "department", 
             foreignField : "_id",
             as : "dept_info"
            }
    
      } /// lookup operator --> return array
     
 ])
     
     
     
   db.students.aggregate([
     {
         $lookup: {
             from: "subjects", /// collection name I need dept name from
             localField: "subjects", 
             foreignField : "_id",
             as : "sub_info"
            }
    
      } /// lookup operator --> return array
     
 ])
     
     
 //// target  get student info and their dept info ---> using aggregation
  
  

db.students.aggregate(
[

    {
      
         $match : {"department" : {$exists:true}}
     }, {
       $lookup:{
           from : "departments", 
           localField : "department", 
           foreignField: "_id", 
           as : "dept_info"
           
           }   /// lookup field with array 
      
     }


])    
     
     
     
     
  
db.students.aggregate(
[

    {
      
         $match : {"department" : {$exists:true}}
     }, {
       $lookup:{
           from : "departments", 
           localField : "department", 
           foreignField: "_id", 
           as : "dept_info"
           }   /// lookup field  return with array 
      
     }, {
         
         $project: {
             fullname : {$concat: ["$firstName", " ", "$lastName"]}, 
             deptname: "$dept_info" ,  // array
             dname: {$arrayElemAt: ["$dept_info", 0]},  // object 
//              deptment_name : "$dname.name"
             
             }
         }, 
         {
             $project: {
                 fullname: "$fullname", 
                 dept_name: "$dname.name"
                 
                 }
             
         }
])       
     
 ///// project ==> to get data from many to many relation 
     /// students and its subjectsss    
     
db.students.aggregate([        
{
    
    $lookup:{
        from : "subjects", 
        localField: "subjects", 
        foreignField : "_id",
        as : "subjects_info"
        
        }
}

         
])         


db.getCollectionInfos({name:"employees"})
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
    
    
    
    
    
    
    
    
    
   
  
 





 
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 




























































































