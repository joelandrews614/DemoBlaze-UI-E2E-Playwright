import { test, expect } from "@playwright/test"
import { HomePage } from "../Pages/HomePage"
import { LoginPage } from "../Pages/LoginPage"

test.describe("Navbar Icons Functionalities", () => {

  test.beforeEach( async ({page}) => {

    var homePage = new HomePage(page)

    await homePage.navigateToHomePage()

  })

  test("Validate Home Link", async ({page}) => {

    var homePage = new HomePage(page)

    // Validating Home Button:
    await homePage.clickNavHomeLink()

  })

  test("Validate Contact Link", async ({page}) => {

    const homePage = new HomePage(page)

    // Validating Contact Button:
    await homePage.clickAndCloseContactLink()

  })

  test("Validate About Us Link", async ({page}) => {

    const homePage = new HomePage(page)

    // Validating About Us Link:
    await homePage.clickAndCloseAboutUsLink()

  })

  test("Validate Cart Link", async ({page}) => {

    const homePage = new HomePage(page)


   // Validating Cart Button:
   await homePage.clickCartLink()
   await homePage.clickNavHomeLink()

  })

})

test.describe("Login Functionalities", () => {

  test.beforeEach( async ({page}) => {

    const homePage = new HomePage(page)

    await homePage.navigateToHomePage()

    await homePage.clickLoginLink()

  })

  test("Successfull User Login and Logout", async ({ page }) => {

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)
    
    await loginPage.enterUsernameTxt("pavanol")
    
    await loginPage.enterPasswordTxt("test@123")
    
    await loginPage.clickLoginBtn()
    
    await homePage.clickLogoutLink()


  })

  test("Failure in Login using Invalid Password", async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.enterUsernameTxt("Test")

    await loginPage.enterPasswordTxt("Test")

    await loginPage.clickLoginBtn()

    await page.on('dialog', async (alert) => {
      await expect(alert.message()).toContain("Wrong password.")
      await alert.accept()
    });

  })

  test("Failure in Login without Entering Username and Password", async ({page}) => {

    const loginPage = new LoginPage(page)

    await loginPage.enterUsernameTxt("")
    
    await loginPage.enterPasswordTxt("")

    await loginPage.clickLoginBtn()

    await page.on("dialog", async (alert) => {
      await expect(alert.message()).toContain("Please fill out Username and PasswordTEST")
      await alert.accept()
    })

  })

})

