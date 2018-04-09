import express from 'express'
import bodyParser from 'body-parser'
import router from './config'

const app = express();

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json');
  next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

router(app);

app.listen(8083, () => {
    console.log('listen to 8083')
});