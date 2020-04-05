const members = require('../../models/Members');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(members);

});

router.get('/:id', (req, res) => {
  let isFound = members.some(member => member.id === parseInt(req.params.id));
  if (isFound) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.json({message: 'No record found'});
  }
});

router.post('/', (req, res) => {

  // let isFound = members.some(member => member.id === parseInt(req.params.id));
  // if(isFound){
  //   res.json(members.filter(member => member.id === parseInt(req.params.id)));
  // } else {
  //   res.json({message: 'No record found'});
  // }

  if (!req.body.name || !req.body.email) {
    return res.status(400).json({message: 'Please add name and email'});
  }

  let newRecord = {
    id: Math.random(),
    // ...req.body
    name: req.body.name,
    email: req.body.email
  };

  members.push(newRecord);
  // res.send(newRecord);
  res.json(members);

});

router.put('/:id', (req, res) => {
  let isFound = members.some(member => member.id === parseInt(req.params.id));
  if (isFound) {
    // res.json(members.filter(member => member.id === parseInt(req.params.id)));
    members.forEach(mem => {
      if (mem.id === parseInt(req.params.id)) {
        mem.name = req.body.name ? req.body.name : mem.name;
        mem.email = req.body.email ? req.body.email : mem.email;
      }
    });
    res.json(members);
  } else {
    return res.status(400).json({message: 'No record found to update'});
    // res.json({message: 'No record found'});
  }
});

router.delete('/:id', (req, res) => {
  let isFound = members.some(member => member.id === parseInt(req.params.id));
  if (isFound) {
    // let arr = members.filter(mem => mem.id !== parseInt (req.params.id));
    // res.json(arr);
    res.json(members.filter(mem => mem.id !== parseInt (req.params.id)));
    // res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.json({message: 'No record found to delete'});
  }
});


module.exports = router;
