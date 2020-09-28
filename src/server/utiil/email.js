const nodemailer = require('nodemailer');

const sendEmail = (req, res, username, password, email) => {

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'projectm688@gmail.com',//replace with your email
        pass: 'aiactrMAJOR'//replace with your password
    }
});

const mailOptions = {
    from: 'kanojias494@gmail.com',//replace with your email
    to: email,//replace with your email
    subject: `Finger Print Based Voting System`,
    html:`<h1>Login Credentials</h1>
        <p> username : ${username}</p><br>
        <p>  password : ${password} </p>`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
       return res.status(500).json({
            message : "Voter is created But Email Send Failed",
            username : username,
            password : password
        })
    }
    else {
        console.log('Email sent: ' + info.response);
       return res.status(200).json({
            message : "Voter is created",
        })
    }
 })
}
module.exports = sendEmail