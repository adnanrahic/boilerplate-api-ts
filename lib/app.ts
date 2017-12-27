import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/////////////////////////////////////////

app.get('/', (req: Request, res: Response, next: NextFunction) => 
  res.status(200).send({ 
    message: 'Hello World!' 
  })
);

app.post('/', function (req, res, next) {
  var data = req.body;
  // query a database and save data
  res.status(200).send(data);
});

export { app };