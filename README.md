#**DECIDR**:
##_You chose last time._


//==//==//==//==//==//
##Table of Contents:
1. Overview
2. Technologies Used
3. General Approach:
4. ERDs
5. User Stories
6. Wireframes
7. Problems/Hurdles


//==//==//==//==//==//
1. 
##Overview:
Decidr: [revolving tagline] is a Google Places-based CRUD app designed to settle once and for all the endless debate over ‘where to eat tonight’ or 'where to go for a drink'. The user has a toggle -bars or restaurants. Using the Google Places API, Decidr accepts the user’s zip code, returning a random restaurant or bar, respectively, along with key pieces of information about the restaurant including: address, rating, price, a google maps view and for logged in users, any comments the user has entered for the establishment. If the user has logged in or created an account they can then save a restaurant to their favorites and later scroll through them editing or deleting them as they choose.

//==//==//==//==//==//
2.
##Technologies Used:
Decidr uses a partnership of _React_ and _Express_ to render and run the web app--Express to communicate with external APIs and CRUD a sql database and React to render and run the _JSX_, _CSS_ and vanilla _javascript_. Both React and Express run off of JavaScript, with React containing CSS styling, as well. Furthermore, we used a myriad of _N_ode _P_ackage _M_anager components to act as middleware and shape the content that we received and the means with which we were able to call for it. Most of these were automatically installed as part of _React Slingshot_. React Slingshot is a react template creator that creates a significantly leaner react template than the default react starter.

  In alphabetical order, the component node packages used are:

  -auto-prefixer: obviates the need for browser-specific prefixes in css styling
  -babel: used to encrypt and hash passwords requiring multiple levels of deciphering 
  -brower-sync: used to sync the app with the most recent save of the files the app relies on--rather than requiring the user to constantly refresh the page after each additional change.
  -chalk: is a string-styling module that allows a more expressive API.
  -connect-history-api-fallback: used to run proxy requests through a single specified index page
  -coveralls: along with Travis runs tests on commits to a GitHub repo and comment on code coverage.
  -css-loader: an npm loader to allow importing fonts and other styles using an @import reference inside of the css file.
  -dotEnv: a loader for information contained within .env files, allowing users to store specific information locally (such as tokens or API keys).
  -enzyme: a javascript testing utility
  -eslint: a linter npm for javascript that increases the intelligibility and specificity of console messages and output.
  -extract text bundles css parallel to the js bundle rather than bundling it _with_ the JS.
  -html-webpack-plugin: assists in creating HTML files, particularly for those with filenames that change after each compilation.
  -jest a react-project javascript testing package.
  -json-loader: loads json and allows it to be outputted as a string.
  -node-sass: a library for binding Node to LibSAss and compiling .scss files to css
  -npm-run-all: allows react to run multiple npm scripts in parallel
  -open: calls for react to open a specific program (default is Chrome) to open the specified URL.
  -postcss-loader: transforms styles across multiple syntaxes.
  -prompt: A command line tool for node that can accept passwords and other user inputs.
  -react-addons-test-utils: a react addon for tests.
  -replace: 'a command line utility for performing search and replace on files' (https://www.npmjs.com/package/replace)
  -sass-loader: compiles SASS to CSS.
  -style-loader: causes css created by the user to take priority over css native to the object.

  Additionally, several web-apps were invaluable in creating this app:
    -WireFrame.cc : for creating wireframes
    -DBDesigner.net : for creating sql schema
    -google : for figuring out a wide variety of error messages
    -w3 for coding assistance and style definitions
    -myFonts: invaluable help finding fonts
    -font2web: for converting those fonts whose licenses permitted into browser readable file types
    -https://css-tricks.com/snippets/css/a-guide-to-flexbox/ a great flexbox visual dictionary
    -stackoverflow: contains a large percentage of human knowledge to date
    -http://paletton.com : a fantastic color palette creator and organizer
    -github
      -The group created two organizations: a main github page for the app as a whole (with two repos--one for express and one for react), and a second github page for design and styling, allowing team members to build independent sections without having to merge entire branches.


      -https://github.com/Decidr : github umbrella
  
      -https://github.com/front-end-template-decidr/front_end_collection/pull/4 :github front end


  Finally, Slack and Apple's iMessage proved invaluable for communicating and working across different iterations of the project.

//==//==//==//==//==//
3.
##General Approach
Decidr's designers began with the simple idea that life in NYC was frequently overburdened by choice; specifically the most vexing choice of all was 'where/what to eat for dinner?', especially relevant with GA's hours and associated diet. The organic outgrowth was to harness the compendious API of either Yelp or Google, filter it by location and to settle all debate by returning a single response (itself randomly selected from a pool of api returns). It followed that users would want to save successful (or unsuccessful) responses to their accounts and to be able to add comments to their responses. With the basic idea set, the designers realized the opportunity presented itself to control or 'decid' other facets of a user's life, as well, and created a 'toggle' switch, allowing users to randomly select a bar, as well. (Plans have been discussed to combine multiple other APIs and select for spouses, clothing and apartments). 

The second step was to begin sketching out rough mockups of what a potential app would like like--what features it would have and what path the user would take through the site. Part of this process was researcing the APIs and determining the necessary ERDs and SQL schema, and once the group settled on the data returned, to create user stories.

The group created in-depth user stories, meant to track across each page and each function, specifying where the user would find features and how she would use them. This done, the group began to focus on the component parts of the App--specifically the design/html architecture of the pages, the front end React module and the back end Express module, building these before focussing on integrating all three component parts into the whole.

//==//==//==//==//==//
4.
ERDS:
ERD (subsequently updated as per API returns: ![alt text] (http://i.imgur.com/peaOLae.png)

//==//==//==//==//==//
5.
User Stories:
[User Stories viewable as a google document](https://docs.google.com/document/d/1YPEOpMZzFNGBDugUMvmjFWx6jdYDBhQtLcasp0qQ-w0/edit?usp=sharing)
--



//==//==//==//==//==//
6.
WireFrames:

Rough WireFrame One: 
###Index Page
![alt text] (http://i.imgur.com/CIgPrYW.jpg)


Rough WireFrame Two: 
###Login Page
![alt text] (http://i.imgur.com/bR5v01F.jpg) 


Rough WireFrame Three: 
###Dashboard
![alt text] (http://i.imgur.com/bvAZV1p.jpg) 


Production WireFrame One: 
###HomePage 
![alt text] (http://i.imgur.com/OI3sy8p.png) 


Production WireFrame Two: 
###Search Return on Home Page 
![alt text] (http://i.imgur.com/aRFcmMP.png) 


Production WireFrame Three: 
###Create New User 
![alt text] (http://i.imgur.com/xOFL1PM.png) 


Production WireFrame Four:  
###LogIn Page 
![alt text] (http://i.imgur.com/6kPjVyk.png) 


Production WireFrame Five: 
###Dashboard Page 
![alt text] (http://i.imgur.com/VLIl4P1.png) 


Production Wireframe Six: 
###Edit Favorite Page 
![alt text] (http://i.imgur.com/ON4fmmN.png) 


Production Wireframe Seven: 
###Mobile Home Page 
![alt text] (http://i.imgur.com/UWTRQw2.png) 

//==//==//==//==//==//
7. 
##Problems/Hurdles:

Group Three faced significant hurdles in actualizing the web tokens in order to call the Google Places API. The group also chose to change APIs early on in the build process in order to use Google's much more capable map API and in the process ahd to redesign the schema and the website based on changing information that would be returned. Finally group communication proved a greater issue than had been anticipated, especially as members and assignments threatened to get siloed. However, a combination of steady hands and a strong adherence to both user stories and a project to-do-list helped to overcome many of these issues.


