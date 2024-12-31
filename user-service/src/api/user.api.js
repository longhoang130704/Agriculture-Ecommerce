

const createUser = async(req, res) => {
    res.send('create')
}

const login = async(req, res) => {
    res.send('login')
}

const getAllUser = async(req, res) => {
    res.send('all')
}

const getUserById = async(req, res) => {
    res.send('one')
}

const updateUserById = async(req, res) => {
    res.send('update')
}

const deleteUserById = async(req, res) => {
    res.send('delete')
}

const restore = async(req, res) => {
    res.send('restore')
}

const destroy = async(req, res) => {
    res.send('destroy')
}

const UserService = {
    createUser,
    login,
    getAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
    restore,
    destroy
}

export default UserService;
