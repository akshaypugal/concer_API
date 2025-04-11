
const concern = require('../models/model');

const getAll= async(req , res)=>{
     try {
         const getAll = await concern.find({})
         if(getAll.length > 0){
            res.status(200).json({
                success : true , 
                message :"Here it is all the data",
                data : getAll
            })
         }
     } catch (error) {
        res.status(404).json({
            success : false , 
            message : 'error in getting all the const'
         })
         console.log('error' , error);
     }
}

const getByID = async(req , res)=>{
    const id = req.params.id 
    const concernByID = await concern.findById(id);
    if(concernByID){
        res.status(200).json({
            success : true , 
            message : 'this is the concern assign to the given id ',
            data : concernByID
        })
        console.log('the data assign to this id ')
    }else{
        res.status(404).json({
            success : false , 
            message : 'This id does not match any concern',
        })
    }

}
const add = async(req , res) =>{
    
     try {
         const newConcern = {
               name : req.body.name,
               concern : req.body.concern,
               tag  : req.body.tag,
        }
        concern.create(newConcern)
        if(newConcern){
            res.status(200).json({
                success : true , 
                message : 'Concern added successfully ',
                data : newConcern 
            })
        }
        
     } catch (error) {
         res.status(404).json({
            success : false , 
            message : 'error in adding the const'
         })
         console.log('Unable to add concer' , error);
     }
}
const UpdateByID = async(req , res) =>{
          const content = req.body ; 
          const id = req.params.id
          const update = await concern.findByIdAndUpdate(id , content , {new : true});
          if(update){
            res.status(200).json({
                success : true , 
                message : 'the update data beign added by the id ',
                data : update
            })
          }else{
            res.status(404).json({
                success : false , 
                message : 'cannot update the data',
            })
          }

}
const deleteByID = async(req  ,res) =>{
    
    const id = req.params.id 
    const concernByID = await concern.findByIdAndDelete(id);
    if(concernByID){
        res.status(200).json({
            success : true , 
            message : 'this is the concern assign to the given id being deleted',
            data : concernByID
        })
        console.log('the data assign to this id ')
    }else{
        res.status(404).json({
            success : false , 
            message : 'This id does not match any concern',
        })
    }
}


const adminAssign = async(req , res) =>{
    const id = req.params.id
    const { assignTo } = req.body ;
    const assignById = await concern.findByIdAndUpdate(id ,{assignTo} , {new : true} )
    if(assignById){
        res.status(200).json({
            success : true , 
            message : 'the admin being assign to the concern ',
            data : assignById
        })
    }else{
        res.status(404).json({
            success : false , 
            message : 'This id does not match any concern',
        })
    }
}


const updateStatus = async(req , res) =>{
    const id = req.params.id
    const { status } = req.body ;
    const assignById = await concern.findByIdAndUpdate(id ,{status} , {new : true} )
    if(assignById){
        res.status(200).json({
            success : true , 
            message : 'the admin being assign to the concern ',
            data : assignById
        })
    }else{
        res.status(404).json({
            success : false , 
            message : 'This id does not match any concern',
        })
    }
}

module.exports = {deleteByID , UpdateByID , add , getAll,getByID , adminAssign , updateStatus }