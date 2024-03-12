1. require('http'); used to make requests to the server. First require the module, then create the server 
    then finally listen for incomming requests on the port specified which in this case is the localhost:3000.
2. Install nodemon from npmjs.com // helps with restarting the server once you make any changes.
3. npm init // initialize use a package.json to keep track of our third-parties dependency.
4. npm i --save lodash // this command saves the dependency in our current project only.. NB: only to show how to
    to install third-parties dependencies.....
5. If I am uploading my project on github, I should let out the node_module folder as it it to large to uploading
    the package.json contains all the dependencies. To install all the necessary packages run npm install this command 
    will install all the third-party dependencies for you and this is a common practice...
6. You can use helmet for security middleware
7. app.use(express.static('public')) to add css files and images in the project.
8. mongodb://localhost:27017 connection string to connect to mongodb.
9. mongoose is the module that allow us to connect to mongodb