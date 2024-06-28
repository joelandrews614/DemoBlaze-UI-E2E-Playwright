exports.LoginPage = class LoginPage{

    constructor(page){

        this.page = page;
        this.usernameTxt = page.locator("#loginusername")
        this.passwordTxt = page.locator("#loginpassword")
        this.loginBtn = page.locator("//button[@onclick='logIn()']")

    }

    async enterUsernameTxt(username){
        await this.usernameTxt.fill(username)
    }

    async enterPasswordTxt(password){
        await this.passwordTxt.fill(password)
    }

    async clickLoginBtn(){
        await this.loginBtn.click()
    }

}