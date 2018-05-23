const nodemailer = require('nodemailer'),
      { oauth2_sendmail } = require('../config');
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type : 'OAuth2',
            user : 'rootcode10@gmail.com',
            clientId : oauth2_sendmail.client_id,
            clientSecret : oauth2_sendmail.client_secret,
            accessToken : oauth2_sendmail.access_token,
            refreshToken : oauth2_sendmail.refresh_token
        }
      });

const mail = {
    from    : 'u4bi <rootcode10@gmail.com>',
    to      : 'rootcode10@gmail.com',
    subject : 'subject text',
    html    : `
    <h1 style='color:#ff00ff;'> u4bi</h1>
    <img src='https://avatars0.githubusercontent.com/u/21367010?s=460&v=4'>
    `
};

module.exports = (req, res) => transporter.sendMail(mail, (err, info) => res.json(!err ? info : { err : err }));