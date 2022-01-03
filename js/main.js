/* ======= Navbar autohide ======= */

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');

  if(el_autohide){

    var last_scroll_top = 0;
    window.addEventListener('scroll', function() {
          let scroll_top = window.scrollY;
         if(scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;

    });
    // window.addEventListener

  }
  // if

});
// DOMContentLoaded  end

/* End Navabar autohide */


/* ======= Social Share Links ======= */
const facebookBtn = document.querySelector(".facebook-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const mailtoBtn = document.querySelector(".mailto-btn");

function init() {


  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI(document.title);
  let postCta = encodeURI("Ciao, guarda questo articolo di Alpinews, il filo diretto con il Mondo Alpitour World: ");

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postCta}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postCta} ${postUrl}`
  );

  mailtoBtn.setAttribute(
    "href",
    `mailto:?subject=${postTitle}&body=Ciao, guarda questo articolo di Alpinews, il filo diretto con il Mondo Alpitour World: ${postUrl}`
  );
}

init();
/* End Social Share Links */
