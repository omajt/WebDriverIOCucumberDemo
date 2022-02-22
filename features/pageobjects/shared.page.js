class sharedPage {
    openHomePage() {
        browser.url("http://automationpractice.com/index.php");
        console.log(
            "Navigate to Url 'http://automationpractice.com/index.php'"
        );
        const browserTitle = browser.getTitle();
        // Assert
    }

    //verifyPageHeading  = async ()=>{

    //}
}
export default new sharedPage();
