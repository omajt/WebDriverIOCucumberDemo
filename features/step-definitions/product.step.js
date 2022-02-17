import {When, Then} from "@cucumber/cucumber";
import productPage from "../pageobjects/product.page";

When(/^I add below products to cart$/, async (table) => {
       await productPage.addProducts(table);
});
Then(/^I shall validate shopping cart as below$/, async (table) => {
       await productPage.verifyShoppingCart(table);
});