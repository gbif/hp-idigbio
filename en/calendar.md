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
<div id="calendar"></div>
<br><img src="{{ site.data.images.FeedIcon.src }}" alt="{{ site.data.images.FeedIcon.alt }}" title="{{ site.data.images.FeedIcon.caption }}" style="float: left; width: 35%; margin: 1em 1em 1em 1em; text-align: left; width: 42px; height: 42px;"><br><span style="font-size: smaller; color: #555;">[Click here](/calendar/export.ics) to download and iCalendar feed of iDigBio's calendar.</span>