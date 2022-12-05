const express = require('express')
const app = express()
const port = 34401

function isURL(str) {
    let urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$';
    let url = new RegExp(urlRegex, 'i');
    return str != undefined && str.length < 2083 && url.test(str);
}

app.get('/', async (req, res) => {
	const url = req.query?.url
	const key = req.query?.key
	const type = req.query?.type
	if(isURL(url)) {
		const response = await fetch(url)
		let content
		if(type == "json") {
			content = await response.json()
		} else {
			content = await response.text()
		}
		
		if(key && type == "json") {
			const url = content[key]
			if(isURL(url)) {
				res.redirect(url)
			} else {
				res.send(content[key])
			}
		} else {
			res.send(content)
		}
	} else {
		return res.send('Invalid URL')
	}
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
