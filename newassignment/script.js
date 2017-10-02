function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav(){
	document.getElementById("ArtNav").style.width = "0";
	document.getElementById("EveNav").style.width = "0";
	document.getElementById("MemNav").style.width = "0";
	document.getElementById("Events").style.textDecoration = "none";
	document.getElementById("Artists").style.textDecoration = "none";
	document.getElementById("MemReg").style.textDecoration = "none";
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("mySidenav").style.marginLeft = "0";
	document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white"
}

function openArt() {
	document.getElementById("Artists").style.textDecoration = "underline overline";
	document.getElementById("Events").style.textDecoration = "none";
	document.getElementById("MemReg").style.textDecoration = "none";
    document.getElementById("ArtNav").style.width = "250px";
	document.getElementById("MemNav").style.width = "0";
	document.getElementById("EveNav").style.width = "0";
    document.getElementById("mySidenav").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function openEve() {
	document.getElementById("Events").style.textDecoration = "underline overline";
	document.getElementById("Artists").style.textDecoration = "none";
	document.getElementById("MemReg").style.textDecoration = "none";
    document.getElementById("EveNav").style.width = "250px";
	document.getElementById("MemNav").style.width = "0";
	document.getElementById("ArtNav").style.width = "0";
    document.getElementById("mySidenav").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function openMem() {
	document.getElementById("MemReg").style.textDecoration = "underline overline";
	document.getElementById("Artists").style.textDecoration = "none";
	document.getElementById("Events").style.textDecoration = "none";
    document.getElementById("MemNav").style.width = "250px";
	document.getElementById("ArtNav").style.width = "0";
	document.getElementById("EveNav").style.width = "0";
    document.getElementById("mySidenav").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 16000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });