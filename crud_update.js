// ********************* Update operators ******************//


db.instructors.find()//
db.instructors.findOne()///  get first statisfy condition 


////////////////////////////////////////////////////////

///
db.instructors.updateOne()/// update first object satisfy conditions 

db.instructors.updateMany() /// update all object that satisfy the conditions 



////////////////////////////////////////////
// update which object .... update with data 
/// update insturctors set firstName='Noha' , email= '' where _id =6 
db.instructors.updateOne(
{ _id: 6}, /// condition

{
    /// update existing field 
    $set : {firstName: "Noha"}
    
 }/// update operation 
)



db.instructors.updateOne(
{ _id: 6}, /// condition

{
    /// update existing field 
    $set : {lastName: "Shehab", age:31}
    
 }/// update operation 
)


/// update --> add new field to the document ? 


db.instructors.updateOne(
{ _id: 6}, /// condition

{
    /// add new field 
    $set : {lastName: "Shehab", 
            age:31, 
        email : "nshehab@iti.gov.eg"
        }
    
 }/// update operation 
)



/// add email property to all instructors 

 db.instructors.updateMany(
{},
{
    /// add new field 
    $set : {email : "nshehab@iti.gov.eg"}
    
 }/// update operation 
)
 
 
 
 //// update non exisiting document 
db.instructors.updateMany(
{_id:100},
{
    /// add new field 
    $set : {firstName : "Rahma", "track": "Could"}
    
 }/// update operation 
)
 
// if document doesn't exist --> insert it 
//  
// db.instructors.updateMany(
// {_id:100}, // condition 
// {
//     /// add new field 
//     $set : {firstName : "Rahma", "track": "Could"}
//     
//  }, /// update operation 
// 
//    {
//         upsert : true 
//     }
// )
//  
 
 
  
db.instructors.updateOne(
{_id:101}, // condition 
{
    /// add new field 
    $set : {firstName : "Rahma", "track": "Could"}
    
 }, /// update operation 

   {
        upsert : true 
    } /// properties of update operation 
)
 
///////////////////////////////////////////////
    
 // ************* Rename field name ******************   


db.instructors.updateMany(
    {}, 
    {
        $rename: {"email": "instructorEmail"}
        
     }
    
 )
    
  
 //// ****************** remove field from document ***********************  
    
db.instructors.updateOne(
    { _id : 6}, 
    {
        $unset : { instructorEmail:"" }  /// unset --> object 
     }
    
 )
    
     
 ////****************** update embedded objects *****************************************
     
     
 db.instructors.updateOne(
    { _id : 6}, 
    {
        $set : { "address.city" :"Mansoura" }  
     }
    
 )
     
     
 /// ************************** increment salary************************
     
     
db.instructors.updateOne(
    { _id : 6}, 
    {
        $inc : { salary: -1000 }  
     }
    
 )
 
   
db.instructors.updateOne(
    { _id : 6}, 
    {
        $mul : { salary: 2 }  
     }
    
 )  
     
 /// update operator min 
 db.instructors.updateOne(
    { _id : 7}, 
    {
        $max : { salary: 7000 }  
     }
    
 )      
  /// $max --> in update operator  ---> 
     /// if given number in the update operator > existing in document
     /// add max 
     
   
db.instructors.updateOne(
    { _id : 7}, 
    {
        $min : { salary: 1000 }  
     }
    
 )    
     
     
 ///// ************ Array update operators **************
     
 // /*** update array elment at known index      **//
 db.instructors.updateOne(
    { _id : 6}, 
    {
        $set : { "courses.0":"javascript" }  
     }
    
 )     
     
  // /*** update array elment at unknown index      **//
 db.instructors.updateOne(
    { _id : 6, courses:"mvc"},   /// courses contains mvc
    {
        $set : { "courses.$":"Django" }  
     }
    
 )     
 
  // /*** add element to the array **//
 db.instructors.updateOne(
    { _id : 6}, 
    {
        $push : { "courses":"laravel" }  
     }
    
 )     
     
   // /*** add set of elements to the array **//
//  db.instructors.updateOne(
//     { _id : 6}, 
//     {
//         $push : { "courses":["odoo", "flask"] }  
//      }
//     
//  )            
     
     
 // I need to add each element in the given array to the courses
 
  db.instructors.updateOne(
    { _id : 6}, 
    {
        $push : { "courses": {$each: ["odoo", "flask"] }}  
     }
    
 )     

 /// //************ addd to set  */
 db.instructors.updateOne({
    _id: 6
    },{
        $addToSet: {"courses":"hjkwhek"} // add element to the array 
        
        
      })


     
 ////*********  remove element from array *************/////
     
     
db.instructors.updateOne(
    { _id : 6}, 
    {
        $pop : { "courses": 1}  
     }
    
 )    
     
  db.instructors.updateOne(
    { _id : 6}, 
    {
        $pop : { "courses": 3}  // : "$pop expects 1 or -1
     } 
    
 )    
        
 
db.instructors.updateOne(
    { _id : 6}, 
    {
        $pop : { "courses": -1}  // : "$pop expects 1 or -1
     } 
    
 )    
            
 //// I dont' know the position of laravel
db.instructors.updateOne(
    { _id : 6}, 
    {
        $pull : { "courses": "laravel"}  // : "$pull expects element
     } 
    
 )    
         
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
  
 

 
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
 
 
 
 

















 
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
         
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
//// *****************************************************
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 






























































