const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     name :{
        type : String , 
        require : true , 
        unique : true , 
        max : [100 , "Name should not be more than  100 charachter"]
     },
     concern :{
        type : String , 
        require : true , 
        max :[500 , "Concern should not be more than 500 charachter"]
     },
     tag :{
        type : String , 
        enum : ['hang' , 'screenfix' ,'blackout']
     },
     status :{
        type : String , 
        enum :['open' , 'inprogress' , 'close'],
        default : 'open'
     },
     assignTo :{
        type : String , 
        enum :['AdminUser1' , 'AdminUser2' , 'AdminUser3']
     },
     createAt :{
        type : Date , 
        default : Date.now 
     }
})

module.exports = mongoose.model('concern',userSchema);