/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#hambuger')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const scrollPrompt = document.querySelector('.scroll-prompt');

  function handleScroll() {
    if (window.scrollY > 0) {
      scrollPrompt.style.opacity = '0';
    } else {
      scrollPrompt.style.opacity = '1';
    }
  }

  window.addEventListener('scroll', handleScroll);
});
