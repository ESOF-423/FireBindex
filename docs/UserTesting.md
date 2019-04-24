# User Testing

## Cam Walkuski

Cam Walkuski is 54 years old and is the Managing Director of Business Operations at a software company but does not have any technical skills. She is familiar with user interfaces and how an interface should be intuitive to an unfamiliar user.

### Her tasks

* Create a new admin account for herself
* Create a new event
* Create a new member
* Add that new member to the new event
* Reset her password
* Create a service

### What we learned

### When creating an admin account

* The full name field is confusing. Should it be two fields with first and last name? Or is it a username? Does it even matter?

### When creating a new member

* She thought the meals selection was how many meals that member would get. We need to change the 0,1,2 selection to In Center Meals, Meals on Wheels, or None.
* There needs to be a success message when a new member is added.
* After the member is created, should it take you back to the blank form? Or should you see the member that you created somehow?
* She entered the incorrect year for the member's birthday, so she wanted to be able to go back and edit just the birthday.

### When creating a new event or service

* The dropdown arrow for the date is pretty small and she didn't notice it at first, I'm not sure if there's an easy way to make it bigger.
* Can there be a similar dropdown for the time selection?
* There should be a success message when a new event or service is created.

### When checking the member in to the event

* It wasn't intuitive that there was a different member checkin page. She tried to just view the event she had just created and add a member to it on that page.
* She wants a period at the end of the error message "Member not found in database, please try again"

### When resetting your password

* After you enter your email address, there should be a message that says 'check your email for a link to reset your password' or something similar.
* When you reset your password through the email link, you only have to enter the new password once but when you do it through the account page, you enter it twice. Should be the same process in both places.
* When using the email link, after you reset your password, you should be redirected to the sign in page.

### Other observations

* The page you are on should be 'active' in the navigation. She was a little confused at times about what page she was on and what page she needed to go to.
* She agreed that the 'Services' wording is a little weird. She suggested 'Classes' or 'Courses' instead.
* Should you be able to sign into services the same way that you sign into events?
* We both wondered if there are the same date/time picker drop downs when the site is accessed on an iPad.
* She suggested that we duplicate a lot of the buttons that are on the nav-bar on big buttons or pictures on the home page so they can be accessed from more than one place.

### Conclusion

* We don't necessarily have to add more features to make the product more useable, just polishing the user stories and making sure things can be found in more than one place and making sure there are success messages where necessary will make a big difference.

## Emily Ketteler

Emily is a graphic design graduate who is a friend of Trent. She has minimal CS background, with one course in Web Design 145RA, but manages an online store using various pre-built systems and tool

### Her tasks included

* Create a new admin account for herself
* Create a new event
* Create a new member
* Add that new member to the new event
* Reset her password
* Create a service

### Our design

* hot pink is a little much
* black is hard to read

* maybe change the order at the top of tabs
  * home (with things on the home page)
  * event
  * service
  * members
  * member checkin
  * admin can be removed
  * account should be last

* padding around cells on create account page

### Our design flaws

* Need to fix meals 0, 1, 2 radio buttons instead of number
* It's too easy to delete a member (modal/light-box?)
* Emily wanted to press a button to check in a member instead of typing name
* admin needs to approve new accounts, not allow all new members to have admin privilege
* Make all the text bigger
* Only display todays events
* Wrap addresses properly on member view page

### Emily's Personal Suggestions

#### Color scheme

* change colors - more neutral tones (purple is fine, but too bright)
* always do dark text on a light background or vice versa

#### Accessibility

* sign in button once you have reset your password
* make popover calendar easier to activate
* create new tab that allows you to make an event or a service or anything (dropdown to select)?
* change time entry to pick and choose in addition to typing in
* simplify UI and reduce transfers between pages if possible
* Create "New Event" in capital words
* large buttons for each page on the home screen

#### Functionality

* when viewing all events, display total in attendance
* change sign up to a link instead of a button
* fewer options for volunteers
* re-work member check in system
* maybe remove meals on wheels? at least justify why it is in the App
* generally make it more "app-style"
* "Add" wording instead of "new" wording?

### We Changed

* The Member Check In to events
  * Button was added next to member in member list to check in
* Bigger Buttons with clearer text
* Proper wraparound for tables
  * prevents cutoff columns
* Moved z index of tables back one
* Fixed meals on wheels into radio buttons

### Will change for final release

* color scheme
* bigger text
* user account creation not automatically admin
* admin control over accounts
* change wording to be consistent
* less page redirection