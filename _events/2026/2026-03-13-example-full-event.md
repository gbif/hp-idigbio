---
title: A fully specified event
# Any line beginning with a '#' is a comment and will be ignored by the website generator.
# Feel free to write notes-to-self on your event items, if you want,
# just bear in mind that your notes will be visible to the public (who looks at GBIF Hosted Portal source code)

event_date: 2026-04-01
event_date_end: 2026-04-02
#   If 'event_date_end' omitted, assumed to end same day

# Specifying time range is optional: if omitted, event_date(_end) timespan is assumed to be all day.
# Otherwise if specifying time range, timezone is America/New_York.
# Specify BOTH event_time AND event_time_end.
# format (24-hour clock): 'HH:mm'
#!NOTE! Ensure times are 'QUOTED' otherwise they may be interpreted as a special number.
event_time: '08:00'
event_time_end: '17:00'

# Optional. Where people can read more information about the event.
#url_post: /post/2026/website-transition
#url_post: https://idigbio.example/ # full absolute URLs also valid

summary: This example event demonstrates all implemented tags for the .ics iCalendar and the calendar page. # Please keep this summary one line.
location: https://ufl.zoom.us/my/idigbio
description: |
  Descriptions can be much longer.
  It can also be written with multiple lines
  as long as you include the pipe ('|') character to preserve these line breaks
  and maintain the two-space hanging indentation.
  Descriptions you write will only appear in the .ics iCal feed, though
  (not the calendar page).
  You can also write very long lines and as long as I wrote the template thing correctly this hopefully shouldn't break things for people that are importing the .ics feed into their Thunderbird/Outlook/(insert calendar application here), or goodness gracious, manually reading the .ics file in a plain text editor for some reason. (Couldn't be me.)
---
