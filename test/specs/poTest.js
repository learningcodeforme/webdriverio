import Login from '../pageObjects/loginPage.js'
import Shop from '../pageObjects/shopPage.js'
import Review from '../pageObjects/reviewPage.js'
import Checkout from '../pageObjects/checkoutPage.js'

//to work with Json file we need file stream
import * as fs from 'fs';

//we read file using fs.readFileSync and parse the json and stored thenm in varaiable 
let credentials = await JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let productList = await JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application', async () => {

  const login = new Login()
  const shop = new Shop();
  const review = new Review();
  const checkout = new Checkout();

  // varaible is just an array element and we have to do forEach() and pass the credintials
  credentials.forEach(({ username, password }) => {


    it('Login Fail page', async () => {
      await browser.url("/loginpagePractise/")

      console.log(browser.getTitle());
      await expect(browser).toHaveTitleContaining('Rahul')
      //await login.Login('rahulshettyacademy','learning123')
      await login.Login(username, password)


      //note when we call method we use  Login() but in property we use without-> ()  like alert 
      // which is define as alert() in loginPage but it is getter property it must call as "alert" not "alert()""
      const error = await login.alert.getText()
      console.log('try to capture without browser pause ')
      console.log('Error Msg without using waitUntil - ' + error)

      //waitUntil--  it wait until condition not match 
      await browser.waitUntil(async () => await login.signIn.getAttribute('value') === 'Sign In',
        {
          tineout: 5000,
          timeoutMsg: 'Error Msg not displayed'
        })
      const erroMessage = await login.alert.getText()
      console.log('Error Msg after implemetning waitUntil - ' + erroMessage)
      await expect(await login.textInfo).toHaveTextContaining('username is rahulshettyacademy and Password is learning')

    })
  });

  productList.forEach(({ products }) => {
    it("Shop page smoke", async () => {

      //  const products =['iphone X','Samsung Note 8']
      await browser.url("/loginpagePractise/")
      await login.Login('rahulshettyacademy', 'learning')
      await shop.checkout.waitForExist()
      await shop.addProductToCart(products)
      await shop.checkout.click()

      const sumOfProducts = await review.sumOfProducts()
      const totalFormattedPrice = await review.totalFormattedPrice()
      console.log("Sum Of Products - " + sumOfProducts)
      console.log("Total Formatted Price - " + totalFormattedPrice)
      //expect(totalPrices).to.equal(finalPrice)
      review.checkoutButton.click();

      //checkout page
      await checkout.countryName('ind')
      await checkout.waitForCountryName.waitForExist({ reverse: true })
      await checkout.selectedCountry.click()
      await checkout.submit.click()

      //console.log( "Success Message - + " + await $('.alert-success').getText())
      // console.log( "Success Message - + " + await checkout.sucessMessage.getText())
    })

  })

})