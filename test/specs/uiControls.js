//import { expect } from 'chai';
describe('UI Controls Test Suite', async () => {
   // describe test suite level
   // it take two arrugument - 
   // 1- Title 
   // 2 - function



   it('UI Controls', async () => {

      await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
      await $('#username').setValue('rahulshettyacademy')
      await $("//input[@name='password']").setValue('learning')
      // when we get more the one element then we use $$  and take then in array and use it
      // const radioButtons= await $$('.radiotextsty');
      // const userRdio=radioButtons[1]
      // await userRdio.click();
      // await browser.pause(30000)
      // parent to child chaning

      // select "User radio button" and  using array index as we use $$ to get more then one element using
      //same locator
      const radioButtons = await $$('.customradio');
      //taken the second element in const userRadio
      const userRdio = radioButtons[1]
      // we use chaining form parent to child   
      // usinf userRadio we chain with child element  using -> $('span')  
      await userRdio.$('span').click()
      // we have to handle the popup 
      // we get the pop locator 
      const modal = await $('.modal-body')
      //wait for pop body to displayed
      await modal.waitForDisplayed();
      //we click the canel button
      await $("#cancelBtn").click()
      // hen we validating that admin radio is not selected  by printing on console
      console.log(await $$("//input[@name='radio']")[0].isSelected())
      // we use userRadio mean "user radio button" to click()
      await userRdio.$('span').click()
      // check pop window open or not
      await modal.waitForDisplayed();
      //click ok  in pop up
      await $("#okayBtn").click()
      await browser.pause(3000)

      //when we select amdin now pop should not appear we have to validate 
      // adimin radio button open using [0] index 
      await $$('.customradio')[0].$('span').click()
      // check popup window not opened using "not"
      // "not" reverse the  toBeDisplayed() to not toBeDisplayed()
      //await expect(modal).not.toBeDisplayed()

      // handle drop down 

      // .form-control is class name for dropdown but it not unique 
      // to make it unique  given tag name.locatorname so it become unique
      // select - it is tag name 
      // .form-control is classname
      const dropdown = await $('select.form-control')   // must have select tag to work on select method 

      //  select based on attribute value 
      // it accept two arrgument
      // 1. attibute name and it value
      await dropdown.selectByAttribute("value", "teach")
      await browser.pause(3000)
      // based on visibleText
      await dropdown.selectByVisibleText("Consultant")
      await browser.pause(3000)
      // based on index
      await dropdown.selectByIndex(0);
      await browser.pause(3000)
      //get  the text of all value in dropdown
      console.log(await dropdown.getText())
      //get  the text  currently selected value in dropdown
      console.log(await dropdown.getValue())

      //till above assertion is webdriver IO  asserstion
      //chai asserstion 
      // like string comaprison or any genral asserstion we use chai assertion 
      // need to install chai asestion in npm 
      // npm install chai
      // chai have similar expect as webdriver io have so to make it different 
      //we need to import then and store then in some const variable


      //expect(await dropdown.getValue()).to.equal("stud")

      // await $("#signInBtn").click();
      // await (await $(".btn-primary")).waitForExist()




   })

   xit("Dyanamic Dropdown Controls ", async () => {
      browser.url("https://rahulshettyacademy.com/AutomationPractice/");
      //setValue - to enter text
      await $("#autocomplete").setValue("ind")
      await browser.pause(3000)
      // parent clild locator csss
      let items = await $$('.ui-menu-item div')
      //get 
      for (var i = 0; i < items.length; i++) {
         //console.log(await items[i].getText())
         if (await items[i].getText() === 'India') {
            await items[i].click()
            await browser.pause(3000)
         }
      }
   })

   it("Checkbox Identifications  ", async () => {
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
      const elemmets = await $$("//input[@type='checkbox']")
      await elemmets[1].click();
      console.log("Checkbox two is selected -   " + await elemmets[1].isSelected())
      console.log("Checkbox three is selected - " + await elemmets[2].isSelected())
      //taking screeen shot 
      browser.saveScreenshot("screenshot.png")
   })

})