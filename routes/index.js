var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'AzureExpress' });
// });

router.get('/', function(req, res, next) {
    var model = {
      title: 'Azure',
      message: process.env.MESSAGE || 'This is default environment'
    };
     res.render('index', model);
});

router.get('/problem', function(){
  throw new Error('Something is wrong!')
});

module.exports = router;
