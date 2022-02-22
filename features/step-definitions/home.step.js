import { Given, When, Then } from "@cucumber/cucumber";
import homePage from "../pageobjects/home.Page";

Then(/^Navigate to SignUp page$/, async () => {
    await homePage.navigateToLoginpage();
});
Then(/^create an account with "(.*)" randon username$/, async (emailId) => {
    console.log(emailId);
    await homePage.InsertEmailAndCreateAccountButton(emailId);
});
