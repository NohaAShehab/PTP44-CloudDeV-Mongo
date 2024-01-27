// 


// db.instructors.find().constructor.name


/// find 
db.instructors.find(
    {}// condition 
    ,{firstName:1, lastName:1} // projection 
).forEach((document)=> {
    print(` ${document.firstName} ${document.lastName}`)
 })



db.instructors.find(
    {}// condition 
).forEach((document)=> {
        print(` ${document.firstName} ${document.lastName}`)
})
 
 
 /// javascript 
 
 
 myarrr = ["Mohamed Thrawat", "Ali", "Ahmed", "Noha", "Omar"]
 myarrr.forEach((element)=> {
     print(element)
 })
 
 
 
 
////

db.instructors.find(
    {}// condition 
    ,{firstName:1, lastName:1} // projection 
).toArray().forEach((document)=> {
    
    print(document.firstName)
 })
 
 /// mongo ---> shortcut ---> you can use directly foreach --> dbquery  
 
//  db.instructors.find(
//     {}// condition 
//     ,{firstName:1, lastName:1} // projection 
// ).forEach((document)=> {
//     
//     print(document.firstName)
//  })
// 
 
 var min =235467890
 var max = 0
 var avg = 0
 var count = 0
 var summ = 0
 
  db.instructors.find(
    {}// condition 
    ,{firstName:1, lastName:1, salary:1} // projection 
).forEach((document)=> {
    
    print(document.firstName)
    count  +=1
    summ += document.salary
    min = Math.min(min, document.salary)
    max = Math.max(max, document.salary)
 })
 
 
 print(count)
 print(summ)
 print(min)
 print(max)
// 
 
 /// find operators 
 
 /// gt // comparison opertor 
db.instructors.find({
    "age": {$gt:21}
    
    },/// condition
    
    {})
 
 //// equatlity operator 
    db.instructors.find({
    "salary":3600 
    
    },/// condition
    
    {})
 
 
    db.instructors.find({
    "salary": {$eq:3600}
    
    },/// condition
    
    {})
 
    
    
/// get age 22 , 28 

/// in 
    
   db.instructors.find({
       "age": {$in: [22,28]}
       }, 
       
       {})
    
    
///  or operator ==> logical operators  ---> top level operators 
       
     db.instructors.find(
       {
        $or : [{age:22}, {age:28}]
       }, 
       {
           
        })  
       
       
     /// age 22 or 28 , and salary   6200
         db.instructors.find(
       {
           
          salary:6200 , 
            $or : [{age:22}, {age:28}]
       }, 
       {
           
        })  
        
        
        db.instructors.find(
       {
         $and : [
           {salary:6200}, 
           { $or: [{age:22}, {age:28}]  }
           
           ]  
         
       }, 
       {
           
        })
        
        
   ///////////////// 
   db.instructors.find()     
        
        
   /// ************ find data ===> based embeded objects *****************
        
    /// get instructors ===> city : cairo 
        
    db.instructors.find(
        {
            
           "address.city":"cairo"   /// qoutes --> mandatory 
         },
        {}
  )
        
   //// city cairo ---> street 10 or 20 ???
        
       db.instructors.find(
        {
            
           "address.city":"cairo" ,  /// qoutes --> mandatory 
            "address.street": {$in: [10,20]}
         },
        {}
  )


/////////////////// ********* Array operators 
///// get instructors --> mvc 
  db.instructors.find(
        {
          courses: "mvc"   /// shortcut --> check if value in array
          },
        {}
  )
   
        
//    db.instructors.find(
//         {
//           courses: ["mvc", "js"]  
//           },
//         {}
//   )
          
     db.instructors.find(
        {
          courses: {$in : ["mvc", "js"]} // mvc or js 
          },
        {}
  )
   
   db.instructors.find(
        {
          courses: {$all : ["mvc", "js"]} // mvc and js 
          },
        {}
  )     
        
        
   //////////// instructors only 3 courses 
   db.instructors.find(
        {
          courses: {$size: 3} //get array size
          },
        {}
  )     
        
        
        
  //// $eleMatch 
        
  /// get instructor 
        
   //// 
        
   db.instructors.insertOne(
        {
               name:"Noha Shehab", 
                subjects : [66,5,555]
         }
        
        
        )
  
  /// get subjects ids > 4  and < 10 
  
  
  db.instructors.find(
         {
          subjects : {$elemMatch : {$gt:5 , $lt:10}}
             
          }
          
         
        )       
         
         
        db.instructors.find(
          {
           subjects : {$all: {$elemMatch : {$gt:5 , $lt:10}}}
              
           }
           
          
         )   
         
         
         
         
         
         
         
         
         
         
         
         
         
        
        
        
        
        
        
        
        
        
        
        
        
        
  //////////// element query operator
        
//    db.instructors.insertOne({
//        "firstName":"Noha", 
//        age: 31
//        })
        
   /// query ---> max , min , salary
 var summ = 0
 
// db.instructors.find(
//     {}// condition 
//     ,{firstName:1, lastName:1, salary:1} // projection 
// ).forEach((document)=> {
//     print(document.firstName)
//     if (document.salary){
//         summ += document.salary
//    }
//  })
//  
//   print(summ)
//    
        
     
  /// find data ---> field exists or not 
 var summ=0
db.instructors.find(
    {
        salary: {$exists:true}  /// return with documents contains salary
     }// condition 
    ,{firstName:1, lastName:1, salary:1} // projection 
).forEach((document)=> {
    print(document.firstName)
        summ += document.salary
 
 })
 
  print(summ)
   



///
 

db.instructors.insertOne({"firstName":"Ahmed", salary:"1000$"})


var summ=0
db.instructors.find(
    {
        salary: {
//             $exists:true,  
            $type:"number"}  /// return with documents contains salary as number
     }// condition 
    ,{firstName:1, lastName:1, salary:1} // projection 
).forEach((document)=> {
    print(document.firstName)
        summ += document.salary
 
 })
 
  print(summ)
   
//////////////////////












































  
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       
       
       
       
       
       
       
       
       
       
       
       
       
       


















    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 