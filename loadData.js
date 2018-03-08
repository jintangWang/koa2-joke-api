const querystring = require('querystring');
const fetch = require('node-fetch')
const db = require('./util/db.js')

const globalUrl = 'https://v.juhe.cn/joke/';
const globalParam = {
    key: "7e69e71b2fe39a230367f65d590ceb6c"
}
const globalOption = {
    headers: {
        'Content-Type': 'json'
    }
}

function get(url, param) {
    let paramStr = querystring.stringify(Object.assign({}, param, globalParam));
    return fetch(globalUrl + url + '?' + paramStr, globalOption).then(res => res.json());
}

function getData() {
	let param = {
	    page: curPage,
	    pageSize: 20
	}
	get('img/text.php', param).then(res => {
	    if (res.reason === 'Success') {
	    	insertData(res.result.data);
    		curPage ++	
	    	if (curPage <= 50) {
	    		getData();
	    	}
	    	
	    }
	})
}
let curPage = 1;
getData();

function insertData(arr) {
	let columns = []
	let values = [];
	arr.forEach((item, index) => {
		if (index === 0) {
			columns = Object.keys(item);
		}
		let valueArr = columns.map(column => item[column]);
		values.push(valueArr);
	})
	let sql = "INSERT INTO `data` ("+columns.join(",")+") VALUES ?;";
	db.query(sql, [values]).then(res => {
		console.log(`新增了${res.affectedRows}行数据`)
	})
}