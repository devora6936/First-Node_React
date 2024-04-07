const User = require('../models/User')

const CreateUser = async (req, res) => {
    const { name, username, email, address, phone } = req.body
    if (!name)
        return res.status(400).send('name is required')
    const user = await User.create({ name, username, email, address, phone })
    res.json(user)
}

const getAllUsers = async (req, res) => {
    const users = await User.find().lean()
    // if (!users[0])
    //     return res.status(400).send('there are no users:(')
    res.json(users)
}

const getUserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id).lean()
    if (!user)
        return res.status(400).send(`there is no user with id ${id}`)
    res.json(user)
}

const updateUser = async (req, res) => {
    const { _id, name, username, email, address, phone } = req.body
    if (!_id || !name)
        return res.status(400).send(`missing required fildes:(`)
    
    const user = await User.findById(_id).exec()
    if (!user)
        return res.status(400).send(`there is no user with id ${id}`)
    user.name = name
    user.username = username
    user.email = email
    user.address = address
    user.phone = phone

    await user.save()
    res.send(`user ${user.name} updated`)
}

const deleteUser=async(req,res)=>{
const {id}=req.params
const user=await User.findById(id).exec()
if (!user)
        return res.status(400).send(`there is no user with id ${id}`)
await user.deleteOne()
res.send(`user ${user.name} deleted`)
}

module.exports={deleteUser,updateUser,getUserById,getAllUsers,CreateUser}