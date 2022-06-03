var currentDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(currentDate);

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // save task to localStorage
    localStorage.setItem(time, text);
  });
  // create a loop to check status if past, present, or future and give assign correct color
  function timeline() {
    // check for amount of hours
    var currentTime = moment().hour();
    // loop through the time blocks
    $(".time-block").each(function () {
      var hourBlock = parseInt($(this).attr("id"));


      // check time and change background depending on if past, present, or future
      if (hourBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (hourBlock === currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  };

  // load items from localStorage
  $('#1-hour .description').val(localStorage.getItem('8-hour'));
  $('#2-hour .description').val(localStorage.getItem('9-hour'));
  $('#3-hour .description').val(localStorage.getItem('10-hour'));
  $('#4-hour .description').val(localStorage.getItem('11-hour'));
  $('#5-hour .description').val(localStorage.getItem('12-hour'));
  $('#6-hour .description').val(localStorage.getItem('13-hour'));
  $('#7-hour .description').val(localStorage.getItem('14-hour'));
  $('#8-hour .description').val(localStorage.getItem('15-hour'));
  $('#9-hour .description').val(localStorage.getItem('16-hour'));
  $('#10-hour .description').val(localStorage.getItem('17-hour'));

  timeline()
});




