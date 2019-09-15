const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

admin.initializeApp();

const options = {
  auth: {
    api_user: functions.config().sengrid.user,
    api_key: functions.config().sengrid.password,
  },
};

const client = nodemailer.createTransport(sgTransport(options));

var email = {
  from: functions.config().email.address,
  to: 'mr.walrus@foo.com',
  subject: 'Hello',
  text: 'Hello world',
  html: '<b>Hello world</b>',
};

// let transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: functions.config().email.address,
//     pass: functions.config().email.password,
//   },
// });

exports.confirmRSVP = functions.firestore
  .document('rsvp/{email}')
  .onCreate((snap, context) => {
    const rsvp = snap.data();

    console.log('WE WANT TO SEND EMAIL TO', rsvp.email);
    console.log('EMAIL SENT FROM', functions.config().email.address);

    const email = {
      from: functions.config().email.address,
      to: rsvp.email,
      subject: 'Hello From sengrid',
      text: 'Hello world',
      html: '<b>Hello world this is in the html</b>',
    };

    return client.sendMail(email, (err, info) => {
      console.log('WTF');
      console.log(err);
      console.log(info);
      if (err) {
        console.log(`Error sending email to ${rsvp.email}`, error);
        return false;
      } else {
        console.log('Message sent: to' + rsvp + email + 'info' + info.response);
        return true;
      }
    });
  });
