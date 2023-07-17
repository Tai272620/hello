import axios from "axios"

module.exports = {
    checkIp: function (ipAddress) {
        return axios.get("http://ip-api.com/json/" + ipAddress)
            .then(res => res.data)
            .catch(er => false)
    }
}