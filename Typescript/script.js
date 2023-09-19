var timer = null;
var countDownReducer = 3;

var changeState = function(state) {
  document.body.className = 'body-state' + state; // changing the class of body

  clearInterval(timer);
  countDownReducer = 3;
  document.getElementById('countDown').innerHTML = countDownReducer;

  if (state == 2) {
    // start timer on state 2
    timer = setInterval(function() {
      countDownReducer--;
      document.getElementById('countDown').textContent = countDownReducer;

      if (countDownReducer > 1 && countDownReducer < 3) {
        //nervous image
        document.getElementById('nervous').className = 'nervous show';
      } else {
        //remove the class show after the timer
        document.getElementById('nervous').className = 'nervous';
      }
      if (countDownReducer <= 0) {
        changeState(3);
      }
    }, 1000);
  }
}
$(function() {
  $('.popup-youtube, .popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});