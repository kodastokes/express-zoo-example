# Node and Express: Assessment

## Tasks
In the app.js file, require Express, create an Express application, and export that application.

In the server.js file, require the exported Express application from the app.js file and start your server.

In the app.js file, you will create three routes: /check/:zip, /zoos/:zip, /zoos/all.

In the middleware/validateZip.js file, you will fill in the function definition to create middleware that is checking for a valid zip code. This will a simple validator.

In the app.js file, you will create error handlers in the case of a missing route and a general error handler.

