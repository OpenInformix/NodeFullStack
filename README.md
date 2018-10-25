## SimpleNodeREST
Licensed under the Apache License, Version 2.0


### SimpleNodeREST (A full stack web solution demo)
This is a full stack web solution (with responsive web page) written in JavaScript with three-tier architecture. In general applications using three-tier architecture provides many benefits such as speed of development, scalability, performance, and availability of the web solution etc. Using **Node.js** for the application add additional benefits and flexibility.  **We can use same programing language (JavaScript) across the stack**, therefore, **all developers can easily understand and collaborate**. FYI: The purpose of this demo is purely educational, no security aspect has considered with it.  
  
#### This solution has following features.
- REST API based on node.js and Express with middleware concept.
- Making AJAX request from a web page and Send/Receive data to/from back-end.
- Examples of REST verb usage such as GET, POST, DELETE
- Serving static page (FYI: node.js with HTTP/1 is not an efficient static page serving engine)
- Basic service virtualization for database access module.


#### Source code location for the features
- Responsive web page (public/index.html)
- AJAX call (public/js/MyApiTest1Ajax.js)
- REST API service (routes/product.js)
- Static Page Serving API (routes/index.js)
- Basic in memory DB (db/InMemDbService.js)
- Informix Database Connectivity (db/IfxProductService.js)
- Basic CURL command to test the REST API (Test/TestProd.http)


#### Logical divisions of this solution are.
- #### Frontend (Presentation tier):  
The source code for the presentation layer is located under **public** folder and the launch page is **[public/index.html](public/index.html)**. The major technologies used in this layer are HTML5, CSS3 and JavaScript. The Bootstrap4 library is being used to theme the visual aspect of the web page along with its responsiveness. Once the initial page is loaded all further communication with the middle tier is by using **AJAX**  by calling REST API exposed from middle tier. The source code for this AJAX call are mostly from **[MyApiTest1Ajax.js](public/js/MyApiTest1Ajax.js)**

- #### Middle tier (Application Tier):
In this application, the middle tier module act as a webserver, REST based API service and also provide basic service virtualization layer for database access.

- #### Backend Database (Data Tier):
This layer is responsible for data storage, in this solution we are using Informix Database also a very simple in memory database by using JSON object.

### Get the demo source code
```bash
# FYI: you may use any folder to clone the source, let us use /work/demo
cd /work/demo
git clone https://github.com/OpenInformix/SimpleNodeREST.git

# fetch all dependent packages
cd SimpleNodeREST
npm install
```

### Starting the REST API service module
```bash
cd /work/demo/SimpleNodeREST
npm start

# Currently only the product REST API has data access facility implemented.
# The remaining REST API will give you dummy response without doing database access.

# Static page serving
# http://localhost:3000/

# REST API implementations
# http://localhost:3000/order
# http://localhost:3000/product
# http://localhost:3000/order
```

### Launch web frontend
Once the web service has started then we can launch the initial page by pasting the following URL in your favorite web browser. This page then act as basic test facility for middle tier and AJAX call.
```bash
# Open the following URL in your favorite web browser to get the initial web page.
http://localhost:3000/
```


