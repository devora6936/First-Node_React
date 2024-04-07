const express=require("express")
const router=express.Router()
const userController=require("../controllers/userController")

router.get('/',userController.getAllUsers)
router.get('/:id',userController.getUserById)
router.put('/',userController.updateUser)
router.post('/',userController.CreateUser)
router.delete('/:id',userController.deleteUser)

module.exports=router