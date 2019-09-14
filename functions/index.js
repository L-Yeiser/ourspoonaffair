const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().email.address,
    pass: functions.config().email.password,
  },
});

exports.confirmRSVP = functions.firestore
  .document('rsvp/{email}')
  .onCreate((snap, context) => {
    const rsvp = snap.data();

    console.log('WE WANT TO SEND EMAIL TO', rsvp.email);
    console.log('EMAIL SENT FROM', functions.config().email.address);

    const mailOptions = {
      from: functions.config().email.address,
      cc: functions.config().email.cc,
      to: rsvp.email,
      subject: 'Thanks for the RSVP',
      text: 'Thanks for the RSVP. This is where Kate gets busy',
      // html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
      //           <br />
      //           <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
      //       `,
    };

    return transporter.sendMail(mailOptions);
  });
