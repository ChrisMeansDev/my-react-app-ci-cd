const request = require('supertest');
const server = require('./http-server'); // import the server

afterAll(() => {
  server.close(); // stops the server
});

describe('GET /', () => {
  it('returns Hello World', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});
