import userModel from "./models/users.js";

export default class UsersDao {
    getById = (id) => {
        return userModel.findById(id);
    }
    removeUser = (id) => {
        return userModel.findByIdAndRemove(id)
    }
    saveUser = (user) => {
        return userModel.create(user);
    }
    updateUser = (id, user) => {
        return userModel.findByIdAndUpdate(id, user)
    }
}