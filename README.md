## SimpleNodeRest
Copyright (c) 2018 Sathyanesh Krishnan. All rights reserved.
Licensed under the Apache License, Version 2.0


#### The Nodejs REST API
This is a basic sample of REST API created by using Nodejs. In this we used middleware concept for the routers. Purpose of this project is purely educational, no security aspect has considered with it.  This project demonstrates the following features.
- REST API based on node.js
- Making AJAX request, such as GET, POST
- Send/Receive data to/from back-end using AJAX call
- Examples of GET, POST, DELETE
- Serving static page (node is not an efficient static page serving engine, with HTTP2 it is relatively better)

#### Feature usage
- AJAX (public/js/MyApiTest1.js)
- Static Page Serving (routes/index.js)
- Basic in memory DB (db/InMemoryDb.js)
- TODO: Connectivity to Informix Database



#### Setup the project
```bash
# Clone the project
git clone https://github.com/OpenInformix/SimpleNodeRest.git

cd SimpleNodeRest
npm install
```

#### Start the node API server
```bash
npm start
```

### API basic usage

```bash
# Static page serving
http://localhost:3000/

# You may invoke GET request on the browser
http://localhost:3000/order
http://localhost:3000/product
http://localhost:3000/order
```


### API test UI
Basic demo of AJAX call
```bash
http://localhost:3000/
```

