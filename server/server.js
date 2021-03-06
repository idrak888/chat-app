const path = require('path');
const express = require('express');

var publicPath = path.join(__dirname, '/../public');

const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(publicPath));

app.get('/', (req, res) => {
	res.send(publicPath);
});

app.listen(port, () => {
	console.log('server started on port ' + port);
});