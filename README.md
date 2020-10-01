# Eat Da Burger - CRUD Operations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## DESCRIPTION
A dynamic website to track all the delicous burgers you want to eat!

Using several tools and technologies – Node, Express, MySQL – and using a homemade ORM (object relational map / model), this website performs CRUD operations (Create, Read, Update, Delete) via a Heroku deployed database. Handlebars is used to template and generate the HTML.

Visit the deployed application here: [https://burger-2020.herokuapp.com/](https://burger-2020.herokuapp.com/)

## SCREENSHOT
![Screenshot of the deployed website](./public/assets/img/screenshot.png)

## TABLE OF CONTENTS
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
    
## INSTALLATION
- No installation is required, as the user can simply visit the deployed application link:  [https://burger-2020.herokuapp.com/](https://burger-2020.herokuapp.com/)
- However, if the user wishes to investigate the code locally, the following steps should be performed:
    - Clone the repo for use on your local machine
    - Use the command line to locate the cloned repo and make it your current directory
    - Type `npm install` in the command line
    - This will install the necessary node module packages and dependencies

## USAGE
- To run the application locally...
    - Use the command line to locate the cloned repo and make it your current directory
    - Use the included `schema.sql` and `seeds.sql` files to create and seed the local database
    - Simply type `node server.js` in the command line
    - Executed correctly, the command line should respond with `Server listening on http://localhost:####`
    - Open your preferred browswer and visit `http://localhost:####/`
    - In both instances above, replace `####` with the corresponding PORT number as noted in the server.js file
    - To end the server instance, simply type "ctrl" + "c"
- To run the application online, please visit the deployed link: [https://burger-2020.herokuapp.com/](https://burger-2020.herokuapp.com/)
- Application functionality is identical whether you are running the server locally or visiting the deployed link:
    - After arriving at the page, the user is presented with several options:
    - Add a burger to the database --> automatically adds it to the uneaten list
    - Eat the burger --> which moves it from the uneaten list to the eaten list
    - Add back to menu --> which moves it from the eaten liste to the uneaten list
    - Delete burger --> regardless of which list, the burger is removed from the database

## LICENSE
License: MIT License<br>
[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

## CONTRIBUTING
[https://github.com/JPBrickhouse](https://github.com/JPBrickhouse)

## QUESTIONS
Feel free to visit the following GitHub for more information:
[https://github.com/JPBrickhouse](https://github.com/JPBrickhouse)
