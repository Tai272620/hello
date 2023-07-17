import mysql from 'mysql';

const mySqlDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
});

module.exports = {
    dbConnect: function () {
        try {
            mySqlDB.connect((err) => {
                if (err) {
                    console.log('Ket noi database that bai do loi mysql', err)
                } else {
                    console.log('Ket noi mysql thanh cong!')
                }
            })
        } catch (er) {
            console.log('Ket noi mysql database that bai', er)
        }
    },
    mySqlDB
}