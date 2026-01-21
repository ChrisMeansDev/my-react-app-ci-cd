const request = require('supertest');
const app = require('./http-server');

let server;

beforeAll(() => {
  server = app.listen(3000); // start server for test
});

afterAll(() => {
  server.close(); // stop server after test
});

test('GET / returns Hello World', async () => {
  const response = await request(app).get('/');
  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello World');
});
