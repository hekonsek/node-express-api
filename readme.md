# Node.js Express.js REST API quickstart

To run the application execute the following command to initialize the project:

```bash
npm install
```

Then execute the following command to start an HTTP server:

```
$ node app.js
Product REST API application listening at http://localhost:8080
```

To change a port of an application set the `PORT` environment variable:

```
$ PORT=6666 node app.js
Product REST API application listening at http://localhost:6666
```

## Using the application

To create new product, execute the following command:

```
$ curl -X POST localhost:8080/product -d '{"title":"The Office DVD", "price": 49.99}' -H "C
ontent-Type: application/json"
{"id":1}
```

Then use the product ID you have received to get the product from the REST API:

```
$ curl localhost:8080/product/1
{"title":"The Office DVD","price":49.99}
```

## Building application

To build an application as Docker image, execute the following command:

```bash
docker build . -t myapp
```

Then run it with the following command:

```bash
docker run -e PORT=8081 -p 8081:8081 -it myapp 
```