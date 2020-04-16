const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'uploads/')
    },
    filename : function(eq,file,cb){
        cb(null, file.originalname)
    }
});

const upload = multer({ storage : storage});

function randomString() {
    let length = 10;
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function generatePassword() {
    var length = 6,
        charset = "0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

console.log(generatePassword())


module.exports  = {
    upload,
    randomString,
    generatePassword
};