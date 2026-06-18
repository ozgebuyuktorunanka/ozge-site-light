import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../app';

const app = createApp();

describe('API surface', () => {
  it('returns 404 for unknown routes', async () => {
    const res = await request(app).get('/api/does-not-exist');
    expect(res.status).toBe(404);
  });

  it('rejects an invalid contact payload with 400', async () => {
    const res = await request(app).post('/api/contact').send({ name: 'a' });
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it('accepts the request shape (validation passes before DB)', async () => {
    // A honeypot-filled payload is valid and short-circuits before the DB,
    // so this exercises the validation layer without needing a database.
    const res = await request(app)
      .post('/api/contact')
      .send({
        name: 'Spam Bot',
        email: 'bot@spam.com',
        message: 'this is a long enough message',
        company: 'filled-honeypot',
      });
    expect(res.status).toBe(201);
  });
});
