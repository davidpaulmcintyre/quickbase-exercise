var express = require('express');
var app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendfile('/dist/index.html');
});

app.listen(app.get('port'), function() {
  /* eslint-disable no-console */
  console.log('Node app is running on port', app.get('port'));
  /* eslint-enable no-console */
});
