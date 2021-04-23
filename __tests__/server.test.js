'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API SERVER:', () => {

  /* ========== 404 bad route ========== */

  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  /* ========== 404 bad method ========== */

  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/').then(data => {
      expect(data.status).toBe(404);
    });
  });

})