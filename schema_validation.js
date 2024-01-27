//// ********** Schema validation ******///////////////

//// apply validation ===> while creating collection 

db.createCollection("employees",
/// I need to add schema validation rules 
{
     validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             // define properties ----> optional properties  --> apply if insert --> check if they follow rules or not
             //// --> restrict add other properties ---> till now 
             properties : {
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} 
                 
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
     
  } // schema creation option 
)

db.employees.insertOne({firstName:"noha", lastName:"Shehab"})

db.employees.insertOne({firstName:"noha"})

db.employees.insertOne({firstName:10, lastName:"Shehab"})

db.employees.insertOne({firstName:"noha", lastName:"Shehab", "email": "jkwehjkrh"})



// /********************* update collection schema rules ********************************/
db.employees.runCommand("collMod", 
{
    
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             properties : {
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} 
                 
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
 
 
//// **********  add required fields ***********************//// 
db.employees.runCommand("collMod", 
{
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             required : ["firstName", "lastName", "email"],
             properties : {
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} ,
                 age : {bsonType: "number"}
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
// db.employees.insertOne({firstName:"Noha", lastName:"Shehab"})

//  db.employees.insertOne({firstName:"Noha", lastName:"Shehab", email:"nn@gmail.com"})
// 

//  db.employees.insertOne({firstName:"Noha", lastName:"Shehab", email:"nn@gmail.com", age:"fff"})
// 
 
 db.employees.insertOne({firstName:"Noha", lastName:"Shehab", email:"nn@gmail.com", age:31,city: "Mans"})

 
 
 
 /// **************** only these fields can be added /// prevent adding additional fields***********************************///
 
 
db.employees.runCommand("collMod", 
{
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             required : ["firstName", "lastName"],
             additionalProperties:false,
             properties : {
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} ,
                 age : {bsonType: "number"}
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
 
  db.employees.insertOne({firstName:"Noha", lastName:"Shehab", age:31})

 
db.employees.runCommand("collMod", 
{
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             required : ["firstName", "lastName"],
             additionalProperties:false,
             properties : {
                 _id: {},/// id object_id /// adding id is a must 
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} ,
                 age : {bsonType: "number"}
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
 
  db.employees.insertOne({firstName:"Noha", lastName:"Shehab", age:31})
  
 ///////********************** id ---> integer ************************///
  
db.employees.runCommand("collMod", 
{
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             required : ["firstName", "lastName"],
             additionalProperties:false,
             properties : {
                 _id: {bsonType: "number"},/// id number /// adding id is a must 
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} ,
                 age : {bsonType: "number"}
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
 
  db.employees.insertOne({_id:1000, firstName:"Noha", lastName:"Shehab", age:31})
 
 
  
  
  
/// //***************************/////
db.employees.runCommand("collMod", 
{
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             required : ["firstName", "lastName", "email"],
             additionalProperties:false,
             properties : {
                 _id: {bsonType: "number"},/// id number /// adding id is a must 
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} ,
                 age : {bsonType: "number"},
                 email: {bsonType: "string"}
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
 
  db.employees.insertOne({_id:10099, firstName:"Noha", lastName:"Shehab", age:31, email:"rerer" })  
  
  
  //// *****************  apply condition age ***************************////
  
  db.employees.runCommand("collMod", 
{
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             required : ["firstName", "lastName", "email"],
             additionalProperties:false,
             properties : {
                 _id: {bsonType: "number"},/// id number /// adding id is a must 
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} ,
                 age : {
                     bsonType: "number", minimum:10 , 
                     description:"age must be gte 10" /// document for developer 
                     },
                 email: {bsonType: "string"}
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
  
    db.employees.insertOne({_id:877, firstName:"Noha", lastName:"Shehab", age:9, email:"rerer" })  

  //////////////////////////////////  Enum 
db.employees.runCommand("collMod", 
{
    validator : {
         $jsonSchema: {
             bsonType: "object" ,/// document ===> specify how to save data in collection
             required : ["firstName", "lastName", "email"],
             additionalProperties:false,
             properties : {
                 _id: {bsonType: "number"},/// id number /// adding id is a must 
                 firstName :{bsonType: "string"} ,
                 lastName: {bsonType: "string"} ,
                 age : {
                     bsonType: "number", minimum:10 , 
                     description:"age must be gte 10" /// document for developer 
                     },
                 email: {bsonType: "string"}, 
                 gender : {enum: ["male", "female"]}
                 }// properties
             
             }  // jsonSchema validator options
         
         } // validator properties 
    
 })
  
     db.employees.insertOne({_id:87, firstName:"Noha", lastName:"Shehab", age:100, email:"rerer", gender:"f" }) 
    
     db.employees.insertOne({_id:87, firstName:"Noha", lastName:"Shehab", age:100, email:"rerer", gender:"female" })  
 

 
 
 
 
 
 
 
 
 
 
 
 
 


























