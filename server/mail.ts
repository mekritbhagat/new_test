import * as nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'user.company@gmail.com',
        pass: 'TestUser19'
    }
});

const mailOptions = {
    from: 'user.company@gmail.com',
    to: 'hem.kriet@gmail.com, rose.hemme@gmail.com',
    subject: 'New Mail',
    text: 'Hello, Mail Testing from Company Inc.',
    html: '<h2>Hello</h2><p>Your Messages</p>'
};

const mailSubscribe = {
    from: 'user.company@gmail.com',
    to: 'hem.kriet@gmail.com, rose.hemme@gmail.com',
    subject: 'New Mail',
    text: 'Hello, Mail Testing from Company Inc.',
    html: '<h2>Hello</h2><p>Your Messages</p>'
};

const mailPost = {
    from: 'user.company@gmail.com',
    to: 'hem.kriet@gmail.com, rose.hemme@gmail.com',
    subject: 'New Mail',
    text: 'Hello, Mail Testing from Company Inc.',
    html: '<h2>Hello</h2><p>Your Messages</p>'
};

transporter.sendMail(mailOptions, function(error: any, info: any) {
    if (error) {
        console.log('Send mail failed');
    } else {
        console.log('Email sent: ' + info.response);
    }
});

transporter.sendMail(mailSubscribe, function(error: any, info: any) {
    if (error) {
        console.log('Send mail failed');
    } else {
        console.log('Email sent: ' + info.response);
    }
});

transporter.sendMail(mailPost, function(error: any, info: any) {
    if (error) {
        console.log('Send mail failed');
    } else {
        console.log('Email sent: ' + info.response);
    }
});