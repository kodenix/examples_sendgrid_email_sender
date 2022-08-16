require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const SENDGRID_KEY = process.env.SENDGRID_KEY || 'DEFAULT_SENDGRID_KEY';
const MSG_DESTINATIONS = process.env.MSG_DESTINATIONS || 'default@midomainemail.com'; 
const MSG_FROM = process.env.MSG_FROM || 'default@midomainemail.com'

function deleteSpace(str) {
    return str.replace(/ /g,'');
}

sgMail.setApiKey(SENDGRID_KEY);

const listMsgTo = deleteSpace(MSG_DESTINATIONS).split(',');                        
const msg = {
    to: listMsgTo,
    from: MSG_FROM,
    subject: 'Test sendgrid',
    text: 'Text example',
    html: '<p>Basic content email from sendgrid</p>',
};

sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent');
    })
    .catch(error => {
        console.error(error);
    });




