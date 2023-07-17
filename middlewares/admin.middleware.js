let isAdmin = true;
module.exports = {
    adminCheck: function (req, res, next) {
        if (isAdmin) {
            next()
        } else {
            res.status(200).json({
                message: "Ban khong phai la admin!"
            })
        }
    }
}