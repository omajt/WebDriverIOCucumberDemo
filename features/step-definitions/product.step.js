import {Given, When, Then} from "@cucumber/cucumber";
import productPage from "../pageobjects/product.page";

When(/^I add below products to cart$/, async (table) => {
       await productPage.addProducts(table);
});
Then(/^I shall validate shopping cart as below$/, async (table) => {
       await productPage.verifyShoppingCart(table);
});
Then(/^I am on the contact page$/, async () => {
       await expect(HomePage.link_Contact).toBePresent();
       await HomePage.link_Contact.click();
       await commonPage.vaerifyPageHeading("CUSTOMER SERVICE - CONTACT US");
});
     
Then(/^I send refund request to customer care for prev. order$/, async () => {
       await conatctPage.sendMessageToCustomerCare();
});