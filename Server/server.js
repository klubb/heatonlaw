const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
app = express()


app.use(cors())
app.use(bodyParser.json());
    app.use(bodyParser.json({type: 'application/*+json'}));
    app.use(bodyParser.urlencoded({extended: false}));

    



const port = 4444;

app.post('/send', (req, res) => {
      console.log('body: ', req.body)
      
      res.status(200).send(req.body)
})










app.listen(port, () => {
  console.log('We are live on port 4444');
});
