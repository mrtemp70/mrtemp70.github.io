// ===== Year =====
document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});


// ===== CV message =====
function showCVMessage(event) {
  event.preventDefault();
  const msg = document.getElementById("cv_msg");
  if (msg) {
    msg.innerText = "Please contact me to request my CV.";
  }
}


// ===== Image swap =====
window.addEventListener("load", function () {

  function swapImage(id, newSrc) {
    const img = document.getElementById(id);
    if (!img) return;

    const temp = new Image();
    temp.src = newSrc;

    temp.onload = function () {
      img.src = newSrc;
    };
  }

  swapImage("homeImg", "img/my-home.jpg");
  swapImage("aboutImg", "img/my-about.jpg");
});