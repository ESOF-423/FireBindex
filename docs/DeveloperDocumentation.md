# Developer Documentation

## Quick Links

* [Reporting Issues](#Reporting-Issues)
* [Contacting Developers](#Contacting-Developers)
* [Contributing](#Contributing)

Table of Contents

* [Developer Documentation](#developer-documentation)
  * [Quick Links](#quick-links)
  * [Reporting Issues](#reporting-issues)
  * [Contacting Developers](#contacting-developers)
  * [Contributing](#contributing)
    * [Obtaining and Building Source Code](#obtaining-and-building-source-code)
    * [Contributing to Live Development](#contributing-to-live-development)
  * [Class Diagram](#class-diagram)
  * [Versions](#versions)
    * [Latest Stable Versions](#latest-stable-versions)
    * [Development Versions](#development-versions)
    * [Continuing Development on End of Life (EOL) Versions](#continuing-development-on-end-of-life-eol-versions)
  * [Directory Structure](#directory-structure)
  * [How to Test the Software](#how-to-test-the-software)
  * [How to Release the Software](#how-to-release-the-software)
  * [Adding to Outstanding/Resolved Bug List](#adding-to-outstandingresolved-bug-list)
  * [Database](#database)
  * [Design](#design)
    * [Routing](#routing)
    * [Pages](#pages)

## Reporting Issues

---

## Contacting Developers

---
Developers can be contacted through email:
<bindexdevelopers@gmail.com>

## Contributing

---

### Obtaining and Building Source Code

All source code is hosted on GitHub @ <https://github.com/ESOF-423/BindexTK>

Bindex is an open-source project written for a software engineering class at Montana State University by students.

1. Make sure you have [Node](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/cli/install) installed on your machine. To check if you already have them, run `node -v` or `npm -v` to check the version you are running.
2. In a terminal, run `git clone https://github.com/ESOF-423/BindexTK.git`
   * Optionally, checkout a branch to test pre-release features
3. run `npm install`
4. run `npm start`

### Contributing to Live Development

Thank you for your interest contributing to Bindex! Please observe the following process to ensure that your changes are easy to integrate into the service.

  1. Fork the [repository](https://github.com/ESOF-423/BindexTK)
  2. Clone your fork

     `git clone https://github.com/yourusername/Bindex.git`

  3. Add the [repository](https://github.com/ESOF-423/BindexTK) as an upstream remote

     `git remote add upstream https://github.com/ESOF-423/BindexTK.git`

  4. Confirm the remote was successfully added

     `git remote -v`

  5. Checkout the `dev` branch

     `git checkout -t upstream/dev`

  6. Create a new branch for the feature you would like to add

     `git checkout -b myfeaturebranch`

  7. Implement your feature (easier said than done)

  8. Submit a pull request onto the `dev` branch of the [repository](https://github.com/ESOF-423/BindexTK)

## Class Diagram

![Class Diagram](img/ESOF423.png "Class Diagram of Architecture")

## Versions

### Latest Stable Versions

Current stable releases are hosted at [bindex.tk](http://bindex.tk)
Source code for stable releases can be found on here on out [GitHub](https://github.com/ESOF-423/BindexTK)

### Development Versions

Development Versions are done on the [dev branch](<https://github.com/ESOF-423/BindexTK/tree/dev>) in the GitHub repository. Versions of code that are currently being tested for their potential to be released can be found here.
We do not host live versions of development code. To test these features, please download the source code using the instructions above

### Continuing Development on End of Life (EOL) Versions

> For Developers seeking to continue Bindex after its original developers have stopped supporting new versions.

All software comes to an end; whether code is developed into a final version or developers stop mid-release. Bindex is an open source project, and therefore available to anyone who wants to continue its development. Contact us through the [email](bindexdevelopers@gmail.com) and ask us about spear-heading the future continuation of Bindex through your own releases.

## Directory Structure

* [/Documentation](<https://github.com/ESOF-423/BindexTK/tree/master/Documentation>) contains documentation for both users and developers
* [/src/tests](<https://github.com/ESOF-423/BindexTK/tree/master/src/tests>) contains test cases for both Node and Python
* [/src](<https://github.com/ESOF-423/BindexTK/tree/master/src>) contains the project JavaScript
* [/public](https://github.com/ESOF-423/BindexTK/tree/master/public) contains project assets not added as a Node module

## How to Test the Software

Something w/ Travis.. I heard he's a cool dude (or gal)

## How to Release the Software

UM

## Adding to Outstanding/Resolved Bug List

> Be sure to check previous listed versions for unresolved bugs, as the one you found may currently be an on-going and unresolved bug.

You found a bug! Please add the bug to the [Bug List](<https://github.com/ESOF-423/BindexTK/tree/documentation/Documentation>) in the corresponding section to the software version, making sure not to duplicate listed bugs.

> All fixed bugs should be reported as fixed, along with the actions taken to resolve the bug.

After a bug has been fixed and the correct patch has been applied, remember to find and mark the listed bug as fixed in the [Bug List](<https://github.com/ESOF-423/BindexTK/tree/documentation/Documentation>). In order to learn from mistakes, make sure to provide a description of how the bug was resolved.

## Database

Still needs work. We are planning on using Firebase.

## Design

For the design we are working with pre-built react code from one of the creative-tim repositories.
<https://github.com/creativetimofficial/material-dashboard-react>

### Routing

The routing for our application is a bit different than the creative-tim source code, as we had to update it for our application's needs.

TODO: more info on the routing

### Pages

Our final design will consist of:

* A login page
* An Admin main page
* Admin pages located in the sidebar
* A Member main page
* Member pages located in the sidebar

For each page in the side bar, the content was built by filling in a grid with the pre-built components from the creative-tim source code. For example: for any given form on the site, we start with a "Card" component to keep the design uniform, then fill that Card with smaller components, like "Custom Input." We can then begin filling each page up with multiple Grid Items, each containing a card which contains the components required for whatever functionality we need (ie the "Add Event" card in the Events page).
