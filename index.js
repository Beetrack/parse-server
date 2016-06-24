var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');
var yaml = require('js-yaml');
var fs = require("fs");
var e = yaml.load(fs.readFileSync(__dirname + "/config/app.yaml"));

console.log(e.DATABASE_URI);

var databaseUri = e.DATABASE_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: e.DATABASE_URI,
  appId: e.APP_ID,
  masterKey: e.MASTER_KEY,
  serverURL: e.SERVER_URL,
  verbose: true,
  push: {
    android: {
      senderId: e.ANDROID_SENDER_ID,
      apiKey: e.ANDROID_API_KEY
    },
    ios: [
      {
        pfx: __dirname + '/config/' + e.IOS_PFX_DEV,
        bundleId: e.IOS_BUNDLE_ID_DEV,
        passphrase: e.IOS_CERT_PASS,
        production: false
      },
      {
        pfx: __dirname + '/config/' + e.IOS_PFX_PRO,
        bundleId: e.IOS_BUNDLE_ID_PRO,
        passphrase: e.IOS_CERT_PASS,
        production: true
      }
    ]
  }
});
var app = express();

var mountPath = e.PARSE_MOUNT;
app.use(mountPath, api);

var port = e.PORT;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});
