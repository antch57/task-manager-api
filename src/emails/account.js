const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'achiarello@fluentstream.com',
        subject: 'Welcome to the test app.',
        text: `${name} welcome to this sweet email thing.`
    });
};

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'achiarello@fluentstream.com',
        subject: 'Goodbye from test app',
        text: `Why did you cancel ${name}?`
    });
};
module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail,
}