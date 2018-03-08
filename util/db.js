const mysql = require('mysql')

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'koa_joke'
})

function query(sql, values) {
	return new Promise((resolve, reject) => {
		pool.getConnection((err, connection) => {
			if (err) {
				reject(err);
			} else {
				connection.query(sql, values,(err, rows) => {
					if (err) {
						reject(err)
					} else {
						resolve(rows)
					}
					connection.release();
				})
			}
		});
	})
}

module.exports = {
	query
}