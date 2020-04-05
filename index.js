
const express = require('express');

const app = express();

const path = require('path');

// const members = require('./models/Members');

// const logger = require('./middleware/logger');

// set static folder - (manually) - to send things to client

// app.get( '/' , (req, res) => {
//
//   // send some html info
//   // res.send(`<h1> hello world sd </h1>`);
//
//   //send html file
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
//
//
// });

// set static folder - (automatically)

// app.use(express.static(path.join(__dirname, 'public')));

if(process.env.NODE_ENV === 'production'){


  app.use(express.static('client/build'));
  app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })

}


// app.get('/api/members', (req, res) => {
//   res.json(members);
// });
//
// app.get('/api/members/:id', (req, res) => {
//
//   let isFound = members.some(member => member.id === parseInt(req.params.id));
//
//   if(isFound){
//     res.json(members.filter(member => member.id === parseInt(req.params.id)));
//   } else {
//     res.json({message: 'No record found'});
//   }
// });

//initiate middleware
// app.use(logger);
// req.body parser middleware
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

