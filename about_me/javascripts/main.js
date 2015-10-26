/*
  The scripts for Masatoshi Nishiguchi's personal web site

  Filename: main.jp
  Author:   Masatoshi Nishiguchi
  Date:     October 25, 2015
*/


// Ensure that DOM has already been loaded.
document.addEventListener('DOMContentLoaded', function() {

  /*
   * 1. Add click listener to all the menu items
   * 2. Toggle the class on click events
   */
  [].forEach.call( document.querySelectorAll( '.menuItems div' ), function ( el ) {
      el.addEventListener( 'click', function () {
          el.classList.toggle('show-description');
      }, false );
  });
});

  // jQuery equivalent
  // $(".menuItems div").on("click", function() {
  //   $(this).toggleClass("show-description");
  // });
