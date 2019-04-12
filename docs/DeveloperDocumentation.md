# Developer Documentation

Bindex is an open-source project written by students of ESOF423: Applications of Software Engineering at Montana State University Spring of 2019. The live version of our site can be found at <http://bindex.tk>.

* [Developer Documentation](#developer-documentation)
  * [Reporting Issues or Bugs](#reporting-issues-or-bugs)
  * [Contacting Developers](#contacting-developers)
  * [Obtaining and Building Source Code](#obtaining-and-building-source-code)
  * [Contributing to Live Development](#contributing-to-live-development)
  * [Class Diagram](#class-diagram)
  * [Versions](#versions)
    * [Latest Stable Versions](#latest-stable-versions)
    * [Development Versions](#development-versions)
    * [Continuing Development on End of Life (EOL) Versions](#continuing-development-on-end-of-life-eol-versions)
  * [Directory Structure](#directory-structure)
  * [How to Test the Software](#how-to-test-the-software)
    * [In the cloud](#in-the-cloud)
    * [On your machine](#on-your-machine)
  * [How to Release the Software](#how-to-release-the-software)
  * [Database](#database)
  * [Design](#design)
  * [Routing](#routing)

## Reporting Issues or Bugs

---
To report an issue with Bindex.tk, on our [GitHub](https://github.com/ESOF-423/FireBindex) page, please create an issue with as much detail about the issue as possible including your authorization status, the version you are using, and any other relevant information.

## Contacting Developers

---
Developers can be contacted via email:
<bindexdevelopers@gmail.com>

## Obtaining and Building Source Code

1. Make sure you have [Node](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/cli/install) installed on your machine. To check if you already have them, run `node -v` or `npm -v` to check the version you are running.
2. In a terminal, run the command `git clone https://github.com/ESOF-423/BindexTK.git`
3. Run `npm install`
4. If prompted, run `npm audit fix` to automatically resolve as many vulnerabilities as possible.
5. Run `npm start`
6. A browser should open with the code running from your local machine

## Contributing to Live Development

Thank you for your interest contributing to Bindex! Please observe the following process to ensure that your changes are easy to integrate into the service.

  1. Fork the [repository](https://github.com/ESOF-423/FireBindex)
  2. Clone your fork

     `git clone https://github.com/yourusername/Bindex.git`

  3. Add the [repository](https://github.com/ESOF-423/FireBindex) as an upstream remote

     `git remote add upstream https://github.com/ESOF-423/BindexTK.git`

  4. Confirm the remote was successfully added

     `git remote -v`

  5. Checkout the `dev` branch

     `git checkout -t upstream/dev`

  6. Create a new branch for the feature you would like to add

     `git checkout -b myfeaturebranch`

  7. Follow the steps from the [previous section](#obtaining-and-building-source-code) to start a development server on your machine

  8. Implement your feature

  9. Submit a pull request onto the `dev` branch of the [repository](https://github.com/ESOF-423/BindexTK)

## Class Diagram

![Class Diagram](img/ClassDiagram.png "Class Diagram of Architecture")

## Versions

### Latest Stable Versions

* Current stable releases are hosted at [bindex.tk](bindex.tk)
* Source code for stable releases can be found on our [GitHub](https://github.com/ESOF-423/BindexTK)

### Development Versions

Development Versions are on the [dev branch](<https://github.com/ESOF-423/BindexTK/tree/dev>) in the GitHub repository. Versions of code that are currently being tested for their potential to be released can be found here. Additionally, there may be branches dedicated to a particular feature

We do not host live versions of development code. To test these features, please download the source code using the instructions above

### Continuing Development on End of Life (EOL) Versions

> For Developers seeking to continue Bindex after its original developers have stopped supporting new versions.

All software comes to an end; whether code is developed into a final version or developers stop mid-release. Bindex is an open source project, and therefore available to anyone who wants to continue its development. [Email](bindexdevelopers@gmail.com) the bindex developers and ask us about spear-heading the future continuation of Bindex through your own releases.

## Directory Structure

* [/docs](<https://github.com/ESOF-423/BindexTK/tree/master/docs>) contains the project documentation
* [/public](https://github.com/ESOF-423/BindexTK/tree/master/public) contains project assets not added as a Node module
* [/src](<https://github.com/ESOF-423/BindexTK/tree/master/src>) primary source directory
  * [/src/components](<https://github.com/ESOF-423/BindexTK/tree/master/src/components>) collection of components that get rendered to create the site
  * [/src/constants](<https://github.com/ESOF-423/BindexTK/tree/master/src/constants>) collection of values that are necessary for routing and rendering
  * [/src/tests](<https://github.com/ESOF-423/BindexTK/tree/master/src/tests>) collection of various tests to ensure the stability of the site

## How to Test the Software

### In the cloud

   Any time a commit is pushed to [the repository](https://github.com/ESOF-423/FireBindex), so long as the branch name does not begin with either `documentation` or `doc_` then Travis-CI will begin running tests on the new commit. The results of these tests can be viewed on [Travis-CI](https://travis-ci.com/ESOF-423/FireBindex).

   Additionally, coverage data will be sent to [coveralls.io](https://coveralls.io/github/ESOF-423/FireBindex?branch=coveralls) where it is displayed in a nice format and includes the history of the repository.

### On your machine

   To test the code locally, run one of the following commands

* `npm run lt` - this will start Jest in watch mode and run all test that it finds. Tests will be re-run whenever a change to the files is detected.
* `npm run lt-cov` - this will start Jest in coverage mode and save the detailed report in the `coverage` folder in the project root. Some metrics are printed to the console, but for a more in-depth analysis please open the `coverage/lcov-report/index.html` in your browser.

## How to Release the Software

Deploying the product to Firebase is as simple as running the `deploy` script in the project root directory. This script relies on your machine already having the following things installed/configured

* [npm](https://www.npmjs.com/) installed
* [Firebase CLI](https://github.com/firebase/firebase-tools) installed
* [Firebase CLI](https://github.com/firebase/firebase-tools) configured for your account
* Your Firebase (Google) account must have the correct permissions

## Database

We are using Firebase's Realtime Database with the following structure:

    belgradeseniorcenter
    |-- attendance
    |   |-- uid
    |       |-- event_id
    |       |-- member_id
    |-- events
    |   |-- uid
    |       |-- eventDescription
    |       |-- eventEndDate
    |       |-- eventEndTime
    |       |-- eventName
    |       |-- eventStartDate
    |       |-- eventStartTime
    |-- members
    |   |-- uid
    |       |-- apartmentNumber
    |       |-- birthday
    |       |-- city
    |       |-- email
    |       |-- emergencyFirstName
    |       |-- emergencyLastName
    |       |-- emergencyPhoneNumber
    |       |-- emergencyRelationship
    |       |-- firstname
    |       |-- lastName
    |       |-- meals
    |       |-- middleName
    |       |-- phoneNumber
    |       |-- state
    |       |-- streetAddress
    |       |-- zip
    |-- services
    |   |-- uid
    |       |-- serviceDescription
    |       |-- serviceEndDate
    |       |-- serviceEndTime
    |       |-- serviceName
    |       |-- serviceStartDate
    |       |-- serviceStartTime
    |-- users
        |-- uid
            |-- email
            |-- username

## Design

Our site started as a template that was created using [create-react-app](https://facebook.github.io/create-react-app/). From there, some things have stayed the same but many have been moved around and refactored to make things easier for us. We are using [npm](https://www.npmjs.com/) to manage dependencies and install new packages. User authentication proved to be non-trivial and we borrowed heavily from this [tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/) to get that aspect of our project working.

When there is more than one pane (section) on a page, we found it useful to split them up into multiple files. This helps to keep things organized and cuts down on file length. For example, `PageEvent.js` is quite simple but when rendered is one of our most complex pages. This is because we have broken `CreateEvent.js` and `ViewEvent.js` out into their own files. This also allows us to easily re-use components such as `ViewMember.js`, making it trivial to include a list of all members anywhere on the site.

## Routing

Our site makes use of a [react-router](https://github.com/ReactTraining/react-router) to make navigation easier. Each page has a route associated with it stored in the `src/constants/routes.js` file. This allows us to import one file and be able to route any page to any other page that has a route. While this could be accomplished via careful management of links across the whole site, this technique simplifies the process and makes it more difficult to get lost.