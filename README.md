# Welcome to "STELLUS-TASK" project !!
    This is a simple project to store and fetch merchant's details from a database
# PRE-REQUISITES
    - Have Postgres properly installed 
    - Have an IDE e.g Visual Studio
    - Have a browser e.g Chrome to view the Swagger Documentation OR Postman for testing API endpoints
    - Have git installed for cloning the repository
# HOW TO SETUP
    - Create a postgres database named "stellus_db"
    - Run "git clone https://github.com/joegabby/stellus-task.git" (without the quotes) on a terminal in your project folder to clone the repository
    - Open the clonned project folder in an IDE
    - Checkout to "master" branch by running "git checkout master" (without the quotes) in the terminal
    - Create (if it doesn't exist ) and/or adjust the .env file according to the database. Use the       "envExample" file located in the root of the project as a guide
    - Run "pnpm install" command in the terminal (without the quotes) to install dependencies
    - Run "pnpm run migration:run" command in the terminal (without the quotes) to migrate the tables to the database
    - Run "pnpm run start" command in the terminal (without the quotes) to start the project
    - To view the Swagger Documentation, search the url "{project-url}/api-docs/" in a browser. E.g if the project is running on port 7000, then the url will be "http://localhost:7000/api-docs/"