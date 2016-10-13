var express = require('express');
var app = express();
var apn = require('apn');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
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

app.post('/notify', function(req, res){
  var body = req.body;
  console.log(body);
  debugger;
});

// var options = {
//       token: {
//           key: '../../APNSAuthKey_N5H7C8MF7S.p8',
//           keyId: "N5H7C8MF7S",
//           teamId: "YHLRFEMTF5",
//       },
//       production: false,
//     };

// var apnProvider = new apn.Provider(options);
// var note = new apn.Notification();
// note.badge = 3;
// note.payload = {'messageFrom': 'John Appleseed'};
// note.topic = "CommuteCall appointment";
// apnProvider.send(note, deviceToken).then( (result) => {
//   });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


