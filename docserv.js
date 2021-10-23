const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*
 MARKDOWN PAGES
 */
// GET STARTED
app.get('/markdown/overview/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'overview.md'));
});

app.get('/markdown/node/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'node.md'));
});

app.get('/markdown/docker/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'docker.md'));
});

app.get('/markdown/bb-400/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'bb-400.md'));
});

app.get('/markdown/ic3000/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'ic3000.md'));
});

app.get('/markdown/confsource/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'confsource.md'));
});

app.get('/markdown/confdest/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'confdest.md'));
});

app.get('/markdown/confdb/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'confdb.md'));
});

app.get('/markdown/connopcua/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'connopcua.md'));
});

app.get('/markdown/connmqtt/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'connmqtt.md'));
});

app.get('/markdown/connad/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'connad.md'));
});
// API REFERENCE
app.get('/markdown/server/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'server.md'));
});

app.get('/markdown/agents/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'agents.md'));
});

app.get('/markdown/agent/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'agent.md'));
});

app.get('/markdown/agentstart/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'agentstart.md'));
});

app.get('/markdown/agentstop/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'agentstop.md'));
});

app.get('/markdown/agentadd/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'agentadd.md'));
});

app.get('/markdown/agentmodify/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'agentmodify.md'));
});

app.get('/markdown/agentdel/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'agentdel.md'));
});

app.get('/markdown/logs/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'logs.md'));
});
// DEVELOPER GUIDE
app.get('/markdown/archserv/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'archserv.md'));
});

app.get('/markdown/archloop/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'archloop.md'));
});

app.get('/markdown/driverif/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'driverif.md'));
});

app.get('/markdown/drivers7/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'drivers7.md'));
});

app.get('/markdown/drivereip/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'drivereip.md'));
});

app.get('/markdown/drivermodbus/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'drivermodbus.md'));
});

app.get('/markdown/drivertds/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'drivertds.md'));
});

app.get('/markdown/driversics/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'driversics.md'));
});

app.get('/markdown/driverprop/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'driverprop.md'));
});

app.get('/markdown/driverdev/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'driverdev.md'));
});

app.get('/markdown/destif/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'destif.md'));
});

app.get('/markdown/destredis/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'destredis.md'));
});

app.get('/markdown/destmqtt/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'destmqtt.md'));
});

app.get('/markdown/destnew/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'destnew.md'));
});
// DATA INTEGRITY
app.get('/markdown/dataintov/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'dataintov.md'));
});

app.get('/markdown/dataintval/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'dataintval.md'));
});

app.get('/markdown/dataintrg/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'dataintrg.md'));
});

app.get('/markdown/dataintsudit/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'dataintsudit.md'));
});

app.get('/markdown/dataintopc/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'dataintopc.md'));
});

app.get('/markdown/dataintsecurity/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'dataintsecurity.md'));
});

app.get('/markdown/dataintdigsig/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'dataintdigsig.md'));
});

app.get('/markdown/datainttrain/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'datainttrain.md'));
});
// RELEASE NOTES
app.get('/markdown/rnlast/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'rnlast.md'));
});

app.get('/markdown/rnhist/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/contents', 'rnhist.md'));
});
app.listen(9000);