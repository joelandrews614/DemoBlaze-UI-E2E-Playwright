import { test, expect } from "../Pages/Base"

test.describe("Navbar Icons Functionalities", () => {

  test.beforeEach( async ({homePage}) => {

    await homePage.navigateToHomePage()

  })

  test("Validate Home Link", async ({homePage}) => {

    // Validating Home Button:
    await homePage.clickNavHomeLink()

  })

  test("Validate Contact Link", async ({homePage}) => {

    // Validating Contact Button:
    await homePage.clickAndCloseContactLink()

  })

  test("Validate About Us Link", async ({homePage}) => {

    // Validating About Us Link:
    await homePage.clickAndCloseAboutUsLink()

  })

  test("Validate Cart Link", async ({homePage}) => {

   // Validating Cart Button:
   await homePage.clickCartLink()
   await homePage.clickNavHomeLink()

  })

})

test.describe("Login Functionalities", () => {

  test.beforeEach( async ({homePage}) => {

    await homePage.navigateToHomePage()

    await homePage.clickLoginLink()

  })

  test("Successfull User Login and Logout", async ({ homePage, loginPage }) => {
    
    await loginPage.enterUsernameTxt("pavanol")
    
    await loginPage.enterPasswordTxt("test@123")
    
    await loginPage.clickLoginBtn()
    
    await homePage.clickLogoutLink()


  })

  test("Failure in Login using Invalid Password", async ({loginPage}) => {

    await loginPage.enterUsernameTxt("Test")

    await loginPage.enterPasswordTxt("Test")

    await loginPage.clickLoginBtn()

  })

  test("Failure in Login without Entering Username and Password", async ({loginPage}) => {

    await loginPage.enterUsernameTxt("")
    
    await loginPage.enterPasswordTxt("")

    await loginPage.clickLoginBtn()

  })

})