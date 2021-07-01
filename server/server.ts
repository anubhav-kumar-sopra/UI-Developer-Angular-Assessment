const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');

const PORT = 3000

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(jsonServer.bodyParser);
server.use(router);



server.listen(PORT, () => {
  console.log('JSON Server is running on '+ PORT );
});
