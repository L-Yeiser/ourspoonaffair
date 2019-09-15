const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const { confirm, decline } = require('./emails');

admin.initializeApp();

const options = {
  auth: {
    api_user: functions.config().sengrid.user,
    api_key: functions.config().sengrid.password,
  },
};

const client = nodemailer.createTransport(sgTransport(options));

exports.confirmRSVP = functions.firestore
  .document('rsvp/{email}')
  .onCreate((snap, context) => {
    const rsvp = snap.data();

    console.log('WE WANT TO SEND EMAIL TO', rsvp.email);
    console.log('EMAIL SENT FROM', functions.config().email.address);
    const name = (rsvp.name || '').split(' ')[0];

    console.log('WTF WTF', name);

    const email = {
      from: functions.config().email.address,
      to: rsvp.email,
      subject: rsvp.attending
        ? 'Get ready for Yeiser Willson 2020'
        : 'We will miss you at our wedding',
      html: rsvp.attending ? confirm(name) : decline(name),
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
