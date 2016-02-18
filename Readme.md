# Angular2 Change detection issue

This code is a sample of an issue with the Angular2 change detection system i ran into. It was encountered in the version 
2.0.0.beta6.

## Getting started

First install the dependencies with `npm install`. The Typescript compiler needs to be globally installed (version 1.7.5 
at the time of this writing). To start the sample simply run `npm start`. It will compile the app and run it after a 2 
second sleep (this was the necessary time for the tsc compiler to dump the files to dist on my Macbook Pro).

The main window should show up and display "App is Running" and the devtools should appear. After 5 seconds a text should
appear that says "Encryption Hardware Present" as a result of an fake hardware event. In the devtools there is a log 
message as well showing that the event got triggered.
