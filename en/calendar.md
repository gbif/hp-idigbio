---
layout: post
title: Events Calendar
permalink: /calendar/
---
<iframe src="https://calendar.google.com/calendar/embed?src=1f9c573c70b226ce1cf44a576dc0e3cec544712e57f936cc969ed748674ee6a8%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
<p style="font-size: smaller; text-align: center;">
  <img src="{{ site.data.images.FeedIcon.src }}" alt="{{ site.data.images.FeedIcon.alt }}" title="{{ site.data.images.FeedIcon.caption }}" style="margin-right: 1em; width: 24px; height: 24px;"><a href="https://calendar.google.com/calendar/ical/1f9c573c70b226ce1cf44a576dc0e3cec544712e57f936cc969ed748674ee6a8%40group.calendar.google.com/public/basic.ics">Subscribe to this calendar</a>
</p>

<!-- THE FOLLOWING CALENDAR IMPLEMENTATION IS RESERVED FOR FUTURE USE. IT IS DRIVEN BY THE .MD FILES IN THE _EVENTS FOLDER.
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js" integrity="sha512-3ojOr2FvTavVymsQrQRtSXZW+6HPnPhWYtLmPbd42n7JdOUP75OqSBf91ZTbzLZb04ffqj+5am9W0bM+MDbWAQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.css">
<link rel="stylesheet" media="print" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.print.css">
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<style>
a {color: #51759a} /* undo bootstrap CSS */
.fc-day-grid-event {background-color: {{ site.algae.style.colors.primary }}}
</style>
<script>
$(document).ready(function() {
  $('#calendar').fullCalendar({
    events:'/calendar/data.json',
    eventRender: function(eventObj, jqel) {
      jqel.popover({
        title: eventObj.title,
        content: eventObj.description,
        trigger: 'hover',
        placement: 'top',
        container: 'body'
      });
    },
  })
});
</script>
<div id="calendar"></div>
<p style="font-size: smaller; text-align: center;">All times are shown for the Eastern Time Zone (America/New_York)</p>
<!-- THE .ICS FUNCTIONALITY IS CURRENTLY NOT WORKING.
<p style="font-size: smaller; text-align: center;">
  <img src="{{ site.data.images.FeedIcon.src }}" alt="{{ site.data.images.FeedIcon.alt }}" title="{{ site.data.images.FeedIcon.caption }}" style="margin-right: 1em; width: 24px; height: 24px;"><a href="{{ '/calendar/export.ics' | absolute_url | replace: 'http://', 'webcal://' | replace: 'https://', 'webcal://' }}">Subscribe to this calendar</a>
</p>
-->
-->
