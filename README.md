yeoman-angular-reference-project
================================

## Overview
A reference project I managed to get up and running on Win7 (64-bit), with Node v0.10.29, npm v1.4.14 and Yeoman (yo) v1.1.2

Having had many frustrations getting a simple Angular app generated with Yeoman on Windows in the past, this project can be used as a diff, to see if there's anything obvious that's different.

I ensured I was running the correct Node an NPM versions by running the latest Node.js installer from http://nodejs.org/ and running `c:\Program Files (x86)\nodejs\nodevars.bat`

In theory, a Windows 7 (or 8?) user should be able to clone this repo, then run the following:

`npm install`, then `bower install`

## Additional Steps
After initially running yo angular, I had to manually add the following to `package.json`:

```"jpegtran-bin": "^0.2.6",```

I've tried this from this machine (clone from GitHub to new local folder and followed steps above), and had no problems.

I've yet to try this from another machine, but when I do, I'll update `README.md`.
