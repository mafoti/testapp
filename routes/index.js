var express = require('express');
var router = express.Router();
var analytics = require('../analytics');

router.get('/', function(req, res) {
  res.render('home', {
    title: 'Query Ethereum Name Service Contract Events'
  });
});

router.get('/get_live', function(req, res) {
  // console.log('CALLED');
  let promT = [];

  promT.push(analytics.getLastBlock());
  promT.push(analytics.getPastEvents());

  Promise.all(promT).then(r => {
    let dat = new Date();
    r.push(dat);
    res.send(r);
  });
});


router.get('/get_blocks/:from', function(req, res) {

  let currentNumber = 0;
  let fromNumber = 0;

  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
  }).then(function() { // (**)
      currentNumber = analytics.getLastBlockNumber();
      return currentNumber;
  }).then(function(result) {
      console.log("currentNumber : " + result);
      fromNumber = analytics.findFromBlock(result, req.params.from);
      return fromNumber;
  }).then(function(result) {
      console.log("fromNumber : " + result);
      events = analytics.getPastEventsWithTimestamps(result);
      return events;
  }).then(r => {
    res.send(r);
    return;
  }).catch(function(err) {
      console.log(err);
  });


});



router.get('/*', function(req, res) {
  res.render('home', {
    title: 'Query Ethereum Name Service Contract Events'
  });
});

module.exports = router;
