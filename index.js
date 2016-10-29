var express = require('express');
var app = express();
var apn = require('apn');
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res){
  res.sendfile('/dist/index.html');
});

app.post('/notify', function(req, res){
  var body = req.body;
  const deviceToken = body.token;

  var options = {
        token: {
            key: './config/APNSAuthKey_N5H7C8MF7S.p8',
            keyId: "N5H7C8MF7S",
            teamId: "YHLRFEMTF5",
        },
        production: false,
      };

  var apnProvider = new apn.Provider(options);
  var note = new apn.Notification();
  note.badge = 1;
  note.alert = `CommuteCall request accepted by ${body.inviteeFirst} ${body.inviteeLast}`;
  note.topic = "com.CommuteCall.reactnative";
  note.notification = {
    recordID: body.recordID,
    inviteeFirst: body.inviteeFirst,
    inviteeLast: body.inviteeLast,
    date: body.date
  };
  apnProvider.send(note, deviceToken).then( (result) => {
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


