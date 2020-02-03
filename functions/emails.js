exports.confirm = function(name) {
  return `
    <p>
    Dear ${name},<br>
    Thank you for taking a moment to RSVP. We’re so excited you’ll be joining us for the wedding! 
    </p>
    <p>
    In the coming months we’ll be sending updates and information on what to consider when packing for Mt. Hood in September. In the coming months we’ll send updates on lodging and information on what to consider when packing for Mt. Hood in September. 
    </p>
    <p>
      Finally, our meals will be vegan with gluten-free options. Please let us know of any additional dietary restrictions or allergies, or any physical accommodation needs for the weekend.Our meals will be vegan, with gluten-free options. Please let us know of any additional dietary restrictions or allergies, or any physical accommodation needs for the weekend.
    </p>
    <p>
      We’re so looking forward to celebrating with you,<br>
      Kate and Lauren
    </p>
    <br>
    <img style="width: 300px; height: auto;" src="https://firebasestorage.googleapis.com/v0/b/ourspoonaffair.appspot.com/o/images%2Fbw-14.jpg?alt=media&token=d23f2a7b-b8b8-4b30-9eae-ce88adc07cfa" />
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
    <img style="width: 300px; height: auto;" src="https://firebasestorage.googleapis.com/v0/b/ourspoonaffair.appspot.com/o/images%2Fbw-14.jpg?alt=media&token=d23f2a7b-b8b8-4b30-9eae-ce88adc07cfa" />
  `;
};
