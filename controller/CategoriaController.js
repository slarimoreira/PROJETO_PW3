const express = require('express');

const router = express.Router();

router.get('/testeget', (req, res)=>{
  console.log('Agora foi GET');
  res.render('index')
});

router.post('/testepost', (req, res)=>{
  console.log('Agora foi POST');
  res.send('TESTE DE POST');
});

router.put('/testeput', (req, res)=>{
  console.log('Agora foi PUT');
  res.send('TESTE DE PUT');
});

router.delete('/testedelete', (req, res)=>{
  console.log('Agora foi DELETE');
  res.send('TESTE DE DELETE');
});

module.exports = router;
