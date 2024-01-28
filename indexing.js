

db.getCollectionInfos({name:"product"})


db.product.find().count()

// db.product.find().explain("executionStats")

db.product.find({brand_name: "Denny"})
.count()

// db.product.dropIndex({"brand_name":1})
db.product.find({brand_name: "Denny"}).explain("executionStats")


db.product.createIndex({brand_name:1})




/// customize index 


db.product.createIndex({field_name: 1}, {
    unique:true, 
    name: "customname", 
    experieAfterSeconds: seconds /// index---> expire after time 
    
    
    }// options )























