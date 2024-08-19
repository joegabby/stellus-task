# Welcome to "STELLUS-TASK" project !!
    This is a simple project to store and fetch merchant's details from a database
# PRE-REQUISITES
    - Have Postgres properly installed 
    - Have an IDE e.g Visual Studio
    - Have a browser e.g Chrome to view the Swagger Documentation OR Postman for testing API endpoints
# HOW TO SETUP
    - Get the source code 
    - Create a postgres database named "stellus_db"
    - Open the source code of the project in an IDE
    - Create (if it doesn't exist ) and/or adjust the .env file according to the database. Use the       "envExample" file located in the root of the project as a guide
    - Run "pnpm install" command in the terminal (without the quotes) to install dependencies
    - Run "pnpm run migration:run" command in the terminal (without the quotes) to migrate the tables to the database
    - Run "pnpm run start" command in the terminal (without the quotes) to start the project
    - To view the Swagger Documentation, search the url "{project-url}/api-docs/" in a browser. E.g if the project is running on port 7000, then the url will be "http://localhost:7000/api-docs/"