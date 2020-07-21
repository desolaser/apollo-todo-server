import userController from './user.controller'

const userResolver = {
    Query: {
        users: () => userController.getUsers(),
        user: (parent, args) => userController.getUser(args),
        currentUser: (parent, args, { user }) => userController.getUser(user)
    },
    Mutation: {
        updateUser: (parent, args) => userController.updateUser(args),
        deleteUser: (parent, args) => userController.deleteUser(args),
        register: (parent, args) => userController.register(args),
        login: (parent, args) => userController.login(args),
    }
}

export { userResolver } 