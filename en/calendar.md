---
layout: post
title: Calendar
permalink: /calendar/
---
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js" integrity="sha512-3ojOr2FvTavVymsQrQRtSXZW+6HPnPhWYtLmPbd42n7JdOUP75OqSBf91ZTbzLZb04ffqj+5am9W0bM+MDbWAQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.min.css">
<link rel="stylesheet" media="print" href="//cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.2.0/fullcalendar.print.css">
<link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' rel='stylesheet' />
<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'></script>
<style>
.fc-day-grid-event {background-color: #8dbea3}
</style>
<script>
$(document).ready(function() {
  eventRender: function(eventObj, $el) {
    $el.popover({
      title: eventObj.title,
      content: eventObj.description,
      trigger: 'hover',
      placement: 'top',
      container: 'body'
    });
  },
  $('#calendar').fullCalendar({
    events:'/calendar/data.json'
  })
});
</script>
<div id="calendar"></div>
<p style="font-size: smaller; text-align: center;">All times are shown for the Eastern Time Zone (America/New_York)</p>
<p style="font-size: smaller; text-align: center;">
  <img src="{{ site.data.images.FeedIcon.src }}" alt="{{ site.data.images.FeedIcon.alt }}" title="{{ site.data.images.FeedIcon.caption }}" style="margin-right: 1em; width: 24px; height: 24px;"><a href="{{ '/calendar/export.ics' | absolute_url | replace: 'http://', 'webcal://' | replace: 'https://', 'webcal://' }}">Subscribe to this calendar</a>
</p>
