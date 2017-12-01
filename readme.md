A simple React app that will be used for mapping

-------------------------------------

Setup:
Have node and npm installed(different versions may cause errors)(Node Version installed is 6.11.0)


Cd into folder from terminal


Type NPM install(Dependencies are located in the package.json file)


Type node server


Server should be up and running in localhost:3000


Currently my credentials are being used for the database connection, however, they can be replaced in the dbroutes.js file


-------------------------------------


STACK:
React, Node, Express, MySQL


-------------------------------------


Files and Folders:


The app folder contains the react files, specifically inside of app/components(the originally goal was to use redux along with react, however, due to time constraints redux was not implemented
  but still remains possible). The styles folder contains the scss files.


Dbroutes.js is a node file that creates a connection to the mysql database and calls the store procedure. Server.js sets up the server using node and express and hosts the app on port 3000.
Due to the lack of a rest api, in order to create an api for react to call so that the data from the store procedure in dbroutes could be stored, superagent was used.
