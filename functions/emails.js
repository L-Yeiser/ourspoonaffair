exports.confirm = function(name) {
  return `
    <p>
    Dear ${name},<br>
    Thank you for taking a moment to RSVP. We’re so excited you’ll be joining us for the wedding! 
    </p>
    <p>
    In the coming months we’ll be sending updates and information on what to xconsider when packing for Mt. Hood in September. 
    </p>
    <p>
      We’ll also work to accommodate everyone who is interested in staying at Cooper Spur. If you indicated you wouldn’t mind bunking with family and friends, we’ll follow up with proposed lodging as well.
    </p>
    <p>
      Finally, our meals will be vegan with gluten-free options. Please let us know of any additional dietary restrictions or allergies, or any physical accommodation needs for the weekend.
    </p>
    <p>
      We’re so looking forward to celebrating with you,<br>
      Kate and Lauren
    </p>
    <br>
    <img style="width: 300px; height: auto;" src="https://firebasestorage.googleapis.com/v0/b/ourspoonaffair.appspot.com/o/images%2Fus_JL2-bw.jpg?alt=media&token=cd68e673-c407-4ab3-9a54-3cfd10551321" />
  `;
};

exports.decline = function(name) {
  return `
    <p>
      Dear ${name},<br>
      Thank you for taking a moment to RSVP. We’re so excited you’ll be joining us for the wedding! Thank you for taking a moment to RSVP. We’re so sorry you won’t be able to join us for the wedding, but we understand. Schedules get busy and life gets complicated. 
    </p>
    <p>
      We hope to see you soon.
    </p>
    <p>
      All the best,<br>
      Kate and Lauren
    </p>
     <br>
    <img style="width: 300px; height: auto;" src="https://firebasestorage.googleapis.com/v0/b/ourspoonaffair.appspot.com/o/images%2Fus_JL2-bw.jpg?alt=media&token=cd68e673-c407-4ab3-9a54-3cfd10551321" />
  `;
};
