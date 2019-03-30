var request = require('supertest');
describe('loading express', function () {
  var server;

  beforeEach(function () {
    delete require.cache[require.resolve('../src/app')];
    server = require('../src/app');
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });

  it('responds to /healthCheck', function testHealth(done) {
  request(server)
    .get('/healthCheck')
    .expect(200, done);
  });

  it('404 everything else', function testPath(done) {
    request(server)
      .get('/notfound')
      .expect(404, done);
  });
});