class InventoryPage {
  constructor(page) {
    this.page = page;

    this.inventoryTitle = page.locator('.title');
    this.backpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.tshirtButton = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async isLoaded() {
    await this.inventoryTitle.waitFor();
  }

  async addBackpackToCart() {
    await this.backpackButton.click();
  }

  async addTShirtToCart() {
    await this.tshirtButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = { InventoryPage };