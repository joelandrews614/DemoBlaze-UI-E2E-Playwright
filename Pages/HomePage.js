exports.HomePage = class HomePage{

    constructor(page){

        this.page = page
        
        this.navHomeLink = page.locator("//li/a[@href='index.html']")

        this.navContactLink = page.getByRole("link", { name: "Contact" })
        this.navContactLinkCloseOption = page.locator("//div[@id='exampleModal']/div/div/div/button[@class='close']")

        this.navAboutUsLink = page.getByRole("link", { name: "About us" })
        this.navAboutUsLinkCloseOption = page.locator("//div[@id='videoModal']/div/div/div/button[@class='close']")
        
        this.cartLink = page.locator("id=cartur")
        
        this.loginLink = page.locator("#login2")

        this.logoutLink = page.locator("#logout2")
    }

    async navigateToHomePage(){

        await this.page.goto("https://demoblaze.com/index.html")

    }

    async clickNavHomeLink (){

        await this.navHomeLink.click()

    }

    async clickAndCloseContactLink(){
        await this.navContactLink.click()
        await this.navContactLinkCloseOption.click()
    }

    async clickAndCloseAboutUsLink(){
        await this.navAboutUsLink.click()
        await this.navAboutUsLinkCloseOption.click()
    }

    async clickCartLink(){
        await this.cartLink.click()
    }

    async clickLoginLink(){
        await this.loginLink.click()
    }

    async clickLogoutLink(){
        await this.logoutLink.click()
    }

}