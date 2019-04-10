# ScoreboardApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Online-Scoreboard.net Functional Specification
------
## Overview

 This functional specification is still in development
 and will need to be revised several times before it is finalized.
 The web pages described here merely give the underlying
 functionality and flow of the application. The actual look
 and feel will be developed iteratively over time with user feedback.

Online-Scoreboard.net is an online service that keeps track of sporting schedules and results. Only
contests involving two contestants at a time will be included; track meets, golf tournaments, and other such
contests involving a field of contestants competing against each other will not be included.

There are four roles involved with the service. They are presented here in *increasing* order of authority.

*  Public Display Viewers - These are the fans and coaches of the teams that are
   participating in the contests or anyone else who is interested in the contests. 
   Collectively, all the contests and teams and groups of teams are called a "Competition." Viewer can view
   a Competition but they cannot change any of the scores or schedules or anything else.
*  Scorers - These people can view everything and they can also record scores for any of the contests in
   the Competition. They Scorers can also correct scores, if needed.
   They cannot, however, schedule or re-schedule any of the contests or manage the
   Teams or the Groupings of the Teams.
*  Managers - Managers can manage the Groupings and the Teams within the Groupings. They can also
   schedule Contests or re-schedule Contests. Once a Competition has been created, a Manager can
   do pretty much anything to the Competition, including setting or changing a password to limit Scorer access.
*  Customers - Customers are the owners of Competitions and, as such, can create a Competition
   and once a Competition is created, the owner can do anything to the Competition,
   including setting or changing a password to limit Manager access and
   setting or changing a password to limit Scorer access.


## Scenarios


Scenarios help illustrate how people in the various roles would use the system.

Take a gander at these scenarios:


### Scenario 1: The Harried Parent.

Pam drops off her son, Trevor, at the entrance to the Kalispell "Big Sky" Basketball Megaplex to join his team for their
tournament. After parking her car, she pays her $10 entrance fee and looks for Trevor's team, the Tomkats.
She doesn't see them but she does see a group of parents and coaches gathered around a sheet of paper taped to a wall.
On the paper, she sees that the Tomkats are Team 25. In the middle of the page on a grid she sees that Team 25
plays 3 on Court 12 at 1. Realizing that it is two minutes to one o'clock, she scrambles to Court 12. 
When she gets there, an irate parent informs her that the Tomkats have been changed to Team 24 
because 24 was a no-show and 24 played 12 on 1 at 12, not on 12 at 1.

Pam finds one of the Tournament Disorganizers and explains her frustration at missing 
her son's only game of the day. She complains that her ten dollars has gotten her nothing
and demands her money back.

What her hour and a half of driving and ten bucks *has* gotten her is 
a five minute explanation of the tournament No-Refund policy.

### Scenario 2: The Overworked Organizer.

Sam has his hands full trying to keep up with updating the scores on the printed schedules
taped to the walls throughout the facility.  Half his time is spent running around 
writing scores on sheets of paper taped to walls
and half his time is spent updating the schedules taped to walls
and half his time is spent dealing with irate moms
who want their money back.

### Scenario 3: The Masterful Manager.

Cam the Man has learned not to answer his phone once a tournament starts because it will probably
just be Sam or one of his other staff members asking him about some scheduling problem that
has come up. The schedule seemed to make so much sense to him when he was putting
it together on his spreadsheet. He tells his staff to tell the parents and coaches that the key
to reading the schedules is to remember their team number and just look for that number in the
grid on the schedule sheets.

It's really pretty easy once you get the hang of it.

### Scenario 4: The Fat-Cat Promoter.

Leo takes it personally when coaches at his tournament tell Leo that his tournament
is poorly run. He takes it personally because he runs the tournament. He sees Cam and
Sam running their tails off, so he knows it is not a lack of hard work that makes
his tournament so unpleasant for the teams and their fans.

Leo is afraid of losing teams for the next tournament.
He needs to do something to improve the tournament's image and make the customers happy.

### Scenario 5: The Next Tournament.

Leo knows that working smart is as important as working hard, so he turns to *Online-Scoreboard* 
to help him run his Next Tournament more smoothly than the Last Tournament. He signs up as a
Customer and, after laying out the format and a few other particulars of the Tournament, 
he turns over the scheduling to Cam,
since that's what Cam does.

Cam takes the link that Leo has given him and finds out that managing the Tournament is really pretty easy,
even easier than his old spreadsheets. He sends a link on to Sam and tells him that he no longer will
have to run around to write scores on sheets taped around all the courts, he can just enter the scores
on his smart phone. Sam suggests to Cam that instead, he send that link to all the teams and have the
winning team of each game enter the score.

"Brilliant!" exclaims Cam.  "I'll do it!"

Cam then emails the scorer link to each of the teams along with another link that the teams and their 
fans can use to keep up with scores and schedules and standings on their tablet or laptops or 
smartphones or whatever.

Once the tournament begins, Cam worries that his phone is not working because there are
no irate phone messages waiting for him. In the morning, he prints out the schedule for that
day and tapes it to a wall (for the old-school folks) and a few times a day he prints out 
the scores and standings up to that point and tapes them next to the schedule.

While doing this, Cam notices a mom of one of the players telling Sam "You guys should have done this 
a long time ago!" and thanking him for keeping the Tournament running so well.

Later on, a game needs to be moved to a different court. Cam updates the schedule online and then
calls the two coaches to tell them about the change and they each tell Cam that they were
already texted the change, but thanks anyways.

Cam says to himself "We should have done this a long time ago!"

## Non Goals


This version will not support the following features, although it is anticipated that they
might become features in a subsequent version in the near future:

* Restrict Dates/Times that a particular Venue can be scheduled.
* Restrict Dates/Times that a particular Team can be scheduled.
* Automatically handle Forfeits.
* Automatically distribute Round-Robin Contests over a range of Dates and Times.
* Schedule Officials at Contests.
* A display, suitable for showing on a screen at a tournament, showing Standings/Brackets
  and a ticker-type display of most recent results as well as upcoming Contests.
* Driving directions to Venues.
* Prevent over-scheduling of Teams or overlapping Contests for a Team.  
* Recording of Scores by Smart-phone app.
* Include Customer's own logo.

These  features will not be included and will likely never be:

* Determine tie-breakers.
* Make a Silk Purse from a Sow's Ear.
* Read the user's mind.


## Web Page Specifications

The overall layout will be the same for nearly all the Web Pages. The layout will consist
of a banner at the top, a Navigation Panel on the left, main content to the right of the 
Navigation Panel, and brief footer information at the bottom. The Navigation Panel will 
have links which will vary based on the context. Instructions may be provided below
the navigation links. In the main content, a status message and other informational
messages will be displayed in a separate section at the top of the main content.

Exceptions to this overall layout will be noted in this specification.

### Home Pages

This collection of pages will serve as a welcome to wandering visitors. It will provide
an introduction to the service and encourage visitors to dive deeper into the service. 
Visitors will be given the opportunity to become Customers.

Navigation links point to the "Public Display" page, the "Scorer" page, the "Manager" page, 
or to the "Login/Register" page.

### Login/Register Page

Customer has a spot to enter their email address (which serves as their userid)
and password to login.

Also present on the page is a link to the Registration Page (below) for people
who are not yet Customers.

### Registration Pages

Customer-to-be has a spot to enter their email address (which will be their userid)
and a login password. They will need to enter this password a second time to confirm.
A second Registration Page will capture some more particulars about the new Customer.

### Manager Access Page

The Customer who owns a Competition can set a
password in order to restrict access to the Manager functions for that Competition. 
If such a password
has been set, then this page will prompt the user for the password and validate
the password before allowing the user to access the Manager Pages for the Competition.

If no password has been set, then this page will be bypassed.

All of the Manager Pages which follow will have the same Navigation Panel
located on the left side of the page. The panel will consist of links to the
other Manager pages plus a link to the Scorer Page and a link to the
Public Display Page. The Scorer Page link and the Public Display Page link 
will open up new tabs in the browser.

### Dates/Venues Pages

In addition to the Navigation Panel on the left, the Main Date/Venue Page 
will have two parts to its main content. These two parts will be a List of Dates
and a List of Venues. Each list will be used to create drop-down lists 
for the scheduling of Contests.

The left side of the main content
will be a list of Valid Dates for holding Contests in this Competition. At the top of the list
will be a selection box for selecting a Date not already on the list and a submit button
to add the Date to the list.

The right side of the main content
will be a list of Venues at which Contests in this Competition can be held. At the top of the list
will be a text entry box for naming a Venue not already on the list and a submit button
to add the Venue to the list. Each Venue in the list will be a link to the Venue Edit Page
for that Venue. If the name of the Venue needs to be corrected or the Venue needs to be deleted,
the user will click on the Venue name to bring up the Venue Edit Page for that Venue.

The Venue Edit Page will allow the Manager to change or correct the name
of the chosen Venue. It will also allow the Manager to delete the Venue, but only
if the Venue has not yet had any Contests scheduled at it.


### Groupings Pages

These Manager Pages allow the Manager to create Groupings and Subgroupings within Groupings
and show the Teams that are in each Grouping. The particulars of each Grouping (e.g. 
its name, the Grouping it belongs to, etc.) can be changed on the Change Grouping page. There
needs to be a link to a page for managing the Teams in the Grouping.


### Team Pages

This Manager Page allow the Manager to Create Teams in Groupings, Move a Team
from one Grouping to another, and to change the name of a Team.


### Regular Contests Pages

These Manager Pages help the Manager schedule Season, Pool, or Group play contests. Individual
Contests can be scheduled or a Complete Round Robin Schedule can be created. Optionally, Date(s) 
and/or Locations (Venues) can be specified for the Round Robin. Scheduled Contests can also have
their particulars (e.g. date/time, location, teams) changed on one of the Scheduling pages.


### Brackets Page

This Manager Page displays the list of Groupings which can have
Bracket Contests and allows the Manager choose which Grouping to work on. 
The Bracket Contests Pages (next) are then confined to Teams from the
selected Bracket Grouping.

### Bracket Contests Pages

These Manager Pages help the Manager schedule Bracket or Playoff contests. Individual
Contests can be scheduled or a Complete Bracket Schedule can be created. Optionally, Date(s) 
and/or Locations (Venues) can be specified for the Round Robin. Scheduled Contests can also have
their particulars (e.g. date/time, location, teams) changed on one of the Scheduling pages. 


### Scorer Access Page

The Customer who owns a Competition or the Manager of a Competition can set a
password in order to restrict access to the Scorer function for that Competition. If such a password
has been set, then this page will prompt the user for the password and validate
the password before allowing the user to access the Scorer Page for the Competition.

If no password has been set, then this page will be bypassed.

### Scorer Page

Two lists of Contests will be displayed on this page.

The first list is of Contests which do not have scores. The list will be displayed
in Date and Time order of the Contests with the oldest Contest first. A numeric entry box
will be provided for each team in the Contest so that the user can enter the score for that
Contest and press a Submit button. The score for only one Contest at a time can be entered this way.

The second list is of Contests which already do have scores. The list will be displayed
in reverse Date and Time order of the Contests with the most recent Contest first. 
Each Contest will be shown with its recorded score. A numeric entry box
will be provided for each team in the Contest so that the user can correct the score for that
Contest and press a Submit button. 
The score for only one Contest at a time can be corrected this way.


### Public Display Competition Selection Page

Cannot leave this page until a Competition is selected.


### Public Display (Standings/Schedules/Scores/Bracket) Page

All the information for a Competition is presented on this page.
The user can view different portions of the Competition
by selecting a single Team or a single Grouping on the page;
the main contents display portion of the page will show what is selected.
A Navigation pane will always be present on the left of the page
for the purpose of selecting a different Grouping.

A link will be provided to display the contents of the currently
selected Standings, Schedule, Scores, or Bracket in a separate
tab or window in a printer-friendly layout. The printer-friendly
layout will not have any navigation pane or other links and is
intended for producing a hard-copy version of the display.
