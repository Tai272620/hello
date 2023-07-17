import { checkIp } from '../utils/checkIp.util'
let flag = true;
module.exports = {
    access: async function (req, res, next) {
        let ipAddress = req.headers['x-forwarded-for'];
        let result = await checkIp(ipAddress)
        // console.log('result ip', result)
        // console.log('da vao accses', ipAddress, req)
        if (flag) {
            next()
        } else {
            res.status(500).send('server da chan ket noi')
        }

    }
}