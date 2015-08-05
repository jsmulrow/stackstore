'use strict';
var path = require('path');
var emailPath = path.join(__dirname, '..', '/views/order.html');
var swig = require('swig');

function Email (
    to_name,
    to_email,
    subject,
    message,
    order,
    logo
){
    swig.setDefaults({ cache: false});
    var renderedEmail = swig.renderFile(emailPath,
        {
            username : to_email,
            logo: logo,
            message: message,
            order: order

        }
    );

    var htmlEmail = {
        "html":  renderedEmail,
        "subject": subject,
        "from_email": 'stackify@mail.com',
        "from_name": 'admin',
        "to": [{
            "email": to_email,
            "name": to_name
        }]
    }

    return htmlEmail;
}

module.exports = Email;
