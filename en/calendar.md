---
layout: post
title: Calendar
permalink: /calendar/
---
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script type="text/javascript" src="/scripts/moment.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.css">
<link rel="stylesheet" media="print" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.print.css">
<style>
.fc-day-grid-event {background-color: #8dbea3}
</style>
<script>
$(document).ready(function() {
  $('#calendar').fullCalendar({
    events:'/calendar/data.json'
  })
});
</script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    const todayButton = document.querySelector(".fc-today-button");
    if (todayButton) {
      todayButton.textContent = "Today";
    }
  }, 1);
});
</script>
<div id="calendar"></div>
