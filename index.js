var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
//   // response.render('pages/index');
//   response.render('dist/index.html');
// });

app.get('/', function(req, res){
  res.sendfile('/dist/index.html');
  // res.send('hi')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

