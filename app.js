var https = require('https');

var username = 'sergeipanfilov';

function printMessage(username, badgeCount, count) {
  var message = username + ' has ' + badgeCount + ' total badges and ' + count + ' points in Javascript';
  console.log(message);
}

var request = https.get('https://teamtreehouse.com/'+ username +'.json', function(response) {
  // console.dir(response.statusCode);
  var body = '';
  response.on('data', function(chunk) {
    body += chunk;
  });

  response.on('end', function() {
    var profile = JSON.parse(body);
    printMessage(username, profile.badges.length, profile.points.JavaScript);
  })

});
