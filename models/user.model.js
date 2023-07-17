import { mySqlDB } from '../mysql.config';

module.exports = {
    getUsers: function () {
        return new Promise((resolve, reject) => {
            mySqlDB.query('SELECT * FROM `users`', function (error, results, fields) {
                if (error) {
                    resolve({
                        status: false,
                        message: "Lỗi truy vấn!"
                    });
                } else {
                    console.log('results', results)
                    resolve({
                        status: true,
                        message: "Truy vấn thành công!",
                        data: results
                    });
                }
            })
        }).catch(err => {
            return {
                status: false,
                message: "Lỗi không xác định!",
            };
        });
    }
}