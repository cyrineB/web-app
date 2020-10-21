# web-app

a simple web application that allows inventory level visualization with a react Frontend and a node Backend and connect them with an API.

*About the app

Actually, there are two separated apps. The frontend which serves to the client use  (using React), and the Backend-server (in Node/Express) which implements the API that ensures the communication between the front and the back .For our storage data , we use a json file.

*How to run the Backend 

In your terminal, navigate to the Backend-server directory.
Run npm install to install all dependencies.
Run npm start to run the node server.

*How to run the Client

In another terminal, navigate to the frontend directory.
Run npm install to install all dependencies.
Run npm start to start the  react frontend.

*Check if they are connected

With the two apps running, open your browser in http://localhost:3000/. FrontEnd is working.
open your browser in  http://localhost:3001/ if in the webpage has the phrase 'welcome to the development api-server', it means the API is working. To verify that your backend is connected to your json file http://localhost:3001/users/  , you will find your json file.

Enjoy!
