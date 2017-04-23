var express = require('express');
var app = express();
var apn = require('apn');
var bodyParser = require('body-parser');
var moment = require('moment');
var fs = require('fs');
var ICS = require('ics');
var ical = new ICS();

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));

app.get('/download', function(req, res){
  var fname = req.query.first;
  var lname = req.query.last;
  var fullname = `${fname} ${lname}`;
  var email = req.query.email;
  var options = {
    eventName: `CommuteCall \- ${fullname}`,
    title: `CommuteCall \-  ${fullname}`,
    description: `This is your scheduled call with ${fullname}.  Have fun connecting!`,
    fileName: 'CommuteCall.ics',
    start: req.query.start,
    end: req.query.end,
    organizer: {
      name: fullname,
      email: email
    },
    attendees: [
      {
        name: fullname,
        email: email
      },
    ],
  }

  ical.createEvent(options, null, function(err, data) {
    res.set({"Content-Disposition":"attachment; filename=\"CommuteCall.ics\""});
    res.send(data);
  })
})

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
        production: true,
      };

  var apnProvider = new apn.Provider(options);
  var note = new apn.Notification();
  note.badge = 1;
  note.alert = `CommuteCall request accepted by ${body.inviteeFirst} ${body.inviteeLast} for ${body.date}`;
  note.topic = "com.CommuteCall.reactnative";
  note.payload = {
    'recordID': body.recordID,
    'date': body.date
  };
  apnProvider.send(note, deviceToken).then( (result) => {
    console.log(result);
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


