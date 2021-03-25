# grails-customerApp

This project use Grails, MongoDB and React profile CRUD web app

# COMPILE THIS WEB APP WITH
cd ./server <br>
grails compile <br>

# Run the Server by using terminal
cd ../ <br>
./gradlew server:bootRun <br>

# To get Customer data/list
curl -i -H "Accept: application/json" localhost:8080/customer <br>

# Post a single data to the Customer endpoint.
curl -i -X POST -H "Content-Type: application/json" -d '{"name":"John Doe","address":"accross the river behind the mountain","city":"the hight mount","postalCode":"11111","phone":"123123123"}' localhost:8080/customer
<br>
# Add React Librarry
cd client <br>
npm install --save react-router-dom <br>
npm install --save-dev bootstrap <br>
npm install --save axios <br>

# Run The Web App
cd ../ <br>
./gradlew bootRun --parallel <br>
