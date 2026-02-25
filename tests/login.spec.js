const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const userData = require('../test-data/userData');

test.describe('Login Feature - SauceDemo', () => {

  let loginPage;

 test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
 });

   test('Login Positive', async ({ page }) => {
    await loginPage.login(
      userData.validUser.username,
      userData.validUser.password
    );

    await expect(page).toHaveURL(/inventory/);
  });

  test('Login Negative - Wrong Password', async () => {
    await loginPage.login(
      userData.invalidUser.username,
      userData.invalidUser.password
    );
    
    await expect(loginPage.errorMessage)
      .toContainText('Username and password do not match');
  });

});