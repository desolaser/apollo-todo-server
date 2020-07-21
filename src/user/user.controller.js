import User from './user.model'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config({ path: ".env" })

const userController = {
    getUsers: () => User.find({}),
    getUser: async ({ id }) => {
        const user = await User.findById(id)
        return user
    },
    updateUser: async ({ id, email, password }) => {
        const user = await User.findById(id)
        if(email) 
            user.email = email
        if(password) 
            user.password = password
        user.save()
        return user
    },
    deleteUser: async ({ id }) => {
        const user = await User.findByIdAndRemove(id)
        return user
    },
    register: async ({ email, password }) => {        
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({ email, password: hashedPassword })
        user.save()
        return user
    },
    login: async ({ email, password }) => {
        const user = await User.findOne({ email })
        
        if (!user) {
            throw new Error('Invalid Login')
        }

        console.log(password, user.password)
        const passwordMatch = await bcrypt.compare(password, user.password)
        
        if (!passwordMatch) {
            throw new Error('Invalid Login')
        }
        
        const token = jwt.sign(
            { id: user.id, username: user.email },
            process.env.SECRET_ENV,
            { expiresIn: '30d' },
        )
        return {
            token,
            user,
        }
    }
}

export default userController