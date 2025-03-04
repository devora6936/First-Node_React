const express =require("express")
const postController=require('../controllers/postController')
const router=express.Router()

router.get('/',postController.getAllPosts)
router.get('/:id',postController.getPostById)
router.post('/',postController.createPost)
router.put('/',postController.updatePost)
router.delete('/:id',postController.deletePost)

module.exports=router