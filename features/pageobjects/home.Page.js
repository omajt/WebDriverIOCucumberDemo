class HomePage{
    //WebElement Locators
    get buttonSignOut(){
        return $(".logout");
    }
    get buttonSignIn(){
        return $(".login");
    }
    get link_Contact() {
        return $("#contact-link");
    }
    get img_Logo(){
        return $(".logo.img-responsive");
    }
    get input_CreateAccountEmail(){
        return $("#email_create");
    }
    get createAccountButton(){
        return $("#SubmitCreate");
    }
    


    //Actions
    async navigateToLoginpage(){
    await this.buttonSignIn.click();
    console.log("Sing In Button Is Clicked");
}

    InsertEmailAndCreateAccountButton = async (emailId) => {
    await this.input_CreateAccountEmail.waitForExist({ timeout: 5000});
    await this.input_CreateAccountEmail.setValue(emailId); 
    await this.createAccountButton.click();   
   
}}
export default new HomePage();