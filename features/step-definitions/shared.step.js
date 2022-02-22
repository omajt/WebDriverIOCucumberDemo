import { Given, When, Then } from "@cucumber/cucumber";
import homePage from "../pageobjects/home.Page";
import sharedPage from "../pageobjects/shared.page";

Given(/^I am on the home page$/, async () => {
    sharedPage.openHomePage();
    // await expect(homePage.buttonSignIn).toBePresent();
    // await expect(homePage.img_Logo).toBePresent();
    // await expect(homePage.link_Contact).toBePresent();

    // homePage.navigateToLoginPage();
});
// Then (/^Navigate to SignUp page$/ , async () => {

//     await homePage.navigateToLoginPage();
// });
