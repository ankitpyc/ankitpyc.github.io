$(function() {


  $("#typed").typed({
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: $('.about_me'),
    // typing speed
    typeSpeed: 10,
    // time before typing starts
    // startDelay: 800,
    // // backspacing speed
    backSpeed: 40,
    smartBackspace: true,
    // loop: false,
    // // time before backspacing
    backDelay: 500,
    // loop
    // // false = infinite
    // loopCount: 5,
    // // show cursor
    showCursor: true,
    // // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    // attr: null,
    // // either html or text
    contentType: 'html',
    // // call when done callback function
    callback: function() {
      // show_profile_text();

    },
    // // starting callback function before each string
    // preStringTyped: function() {},
    // //callback for every typed string
    // onStringTyped: function() {},
    // // callback for reset
    // resetCallback: function() {}
  });
});
