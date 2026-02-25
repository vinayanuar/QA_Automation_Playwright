const { InventoryPage } = require('../pages/InventoryPage');
const { LoginPage } = require('../pages/LoginPage');
const { test, expect} = require('@playwright/test');

test('Login Positive', async ({ page }) => {
  
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);

    await expect(page).toHaveURL(/inventory/);
});