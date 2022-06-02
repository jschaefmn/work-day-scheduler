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
    $('.time-block').each(function () {
      var hourBlock = parseInt($(this).attr('id').split('hour')[1]);

      // check time and change background depending on if past, present, or future
      if (hourBlock < currentTime) {
        $(this).removeClass('present');
        $(this).removeClass('future');
        $(this).addClass('past');
      } else if (hourBlock === currentTime) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  };

  // load items from localStorage
  $('#1-hour .description').val(localStorage.getItem('1-hour'));
  $('#2-hour .description').val(localStorage.getItem('2-hour'));
  $('#3-hour .description').val(localStorage.getItem('3-hour'));
  $('#4-hour .description').val(localStorage.getItem('4-hour'));
  $('#5-hour .description').val(localStorage.getItem('5-hour'));
  $('#6-hour .description').val(localStorage.getItem('6-hour'));
  $('#7-hour .description').val(localStorage.getItem('7-hour'));
  $('#8-hour .description').val(localStorage.getItem('8-hour'));
  $('#9-hour .description').val(localStorage.getItem('9-hour'));
  $('#10-hour .description').val(localStorage.getItem('10-hour'));

  timeline()
});




