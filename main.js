function smoothScroll(target, duration) {
    let targetPosition = target.getBoundingClientRect().top + window.scrollY;
    let startPosition = window.scrollY;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

document.getElementById("get-started-button").addEventListener("click", function () {
    smoothScroll(document.getElementById("product-page"), 1000)
});

function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex"
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none"
}