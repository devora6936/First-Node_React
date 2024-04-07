const Post = require('../models/Post')

const createPost = async (req, res) => {
    const { body, title } = req.body
    if (!body)
        return res.status(400).send(`body is required`)
    const post = await Post.create({body,title})
    res.json(post)
}

const getAllPosts = async (req, res) => {
    const posts = await Post.find().lean()
    // if (!posts[0])
    //     return res.status(400).send(`there are no posts`)
    res.json(posts)
}

const getPostById = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id).lean()
    if (!post)
        return res.status(400).send(`there is no post with id ${id}`)
    res.json(post)
}

const updatePost = async (req, res) => {
    const { body, title, _id } = req.body
    if (!_id || !body)
        return res.status(400).send(`missing required fildes`)
    const post = await Post.findById(_id).exec()
    if (!post)
        return res.status(400).send(`there is no post with id ${_id}`)
    post.body = body
    post.title = title

    await post.save()
    res.send(` ${post.title} updated`)
}

const deletePost = async (req, res) => {
    const { id } = req.params
    const post = await Post.findById(id).exec()
    if (!post)
        return res.status(400).send(`there is no post with id ${_id}`)
    await post.deleteOne()
    res.send(`post ${post.title} deleted`)
}

module.exports={createPost,getAllPosts,getPostById,updatePost,deletePost}