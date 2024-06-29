const base = require("@playwright/test")
import { LoginPage } from "./LoginPage"
import { HomePage } from "./HomePage"

exports.test = base.test.extend({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page)   
        await use(loginPage)
    },
    homePage: async({page}, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    }
})

exports.expect = base.expect
