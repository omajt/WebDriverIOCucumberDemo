import { Then } from "@cucumber/cucumber";
import myaccount from "../pageobjects/myaccount.page";

Then(
    /^I shall verify the address information in my addresses section$/,
    async () => {
        await myaccount.navigateToAddress();
    }
);
