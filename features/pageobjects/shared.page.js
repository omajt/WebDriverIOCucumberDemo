require("dotenv").config();

class sharedPage {
    openHomePage() {
        const homepage = process.env.BASE_URL;

        browser.url(homepage);
        console.log("Navigate to URL: " + homepage);
        //const browserTitle = browser.getTitle();
        // Assert
    }

    //verifyPageHeading  = async ()=>{

    //}
}
export default new sharedPage();
