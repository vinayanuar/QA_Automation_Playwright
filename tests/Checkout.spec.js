const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('E2E Checkout Flow - SauceDemo', () => {

  test('Complete Checkout Flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpackToCart();
    await inventoryPage.addTShirtToCart();
    await inventoryPage.goToCart();

    const cartPage = new CartPage(page);
    await cartPage.proceedToCheckout();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillInformation('Dylan', 'Vinsa', '12720');
    await checkoutPage.finishOrder();

    await expect(checkoutPage.successMessage)
  .toHaveText('Thank you for your order!');
  });

});