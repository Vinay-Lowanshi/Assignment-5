
const path = require('path');
exports.getContact=(req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
}

exports.success=(req, res, next) => {
    res.send("Data Sucessfully Submitted")
}

exports.error404page=(req, res, next) => {
    res.send("<h1>Error 404 found</h1>")
}