const { test, expect } = require('@playwright/test');

test.describe('API Automation - Reqres', () => {

  test('GET List Users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);
    expect(body.data[0]).toHaveProperty('email');
  });

  test('POST Create User', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'Ikhsan',
        job: 'QA Automation'
      }
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe('Ikhsan');
    expect(body.job).toBe('QA Automation');
  });

});