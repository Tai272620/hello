import userModel from "../models/user.model"

module.exports = {
    getUsers: async function (req, res) {
        let result = await userModel.getUsers();
        if (!result.status) {
            res.status(500).json(
                {
                    message: result.message
                }
            )
        } else {
            res.status(200).json(
                {
                    message: result.message,
                    data: result.data
                }
            )
        }
    }
}