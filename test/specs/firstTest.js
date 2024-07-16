describe('Ecommerce Application', function () {
     // describe test suite level
     // it take two arrugument - 
     // 1- Title 
     // 2 - function

     it('Login Fail page', async () => {
          //this.retries(2)


          // it block is test case
          // it take two arrugument - 
          // 1- Title 
          // 2 - function


          // javascript is async -there is no garuneete each line execute in same order
          await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
          //each statement of javascript return promise
          // 1) resolved 2) pending 3) reject
          // to make js run in synoc we need to use keyword await before each statatement  till promise is relove 
          // to use await we need to use async at fuction level 
          // use it as decribe and it level 
          console.log(browser.getTitle());
          await expect(browser).toHaveTitleContaining('Rahul')
          //await expect(browser).toHaveTitle('Rahul')

          // webdriver support it support css selector and xpath

          // id - #id 
          //classname= .classname
          // tagname[attribute='value']

          //assertion

          //to run we have to use command -  

          // npx wdio run ./wdio.conf.js


          await $('#username').setValue('Rahulshettyacademy')
          await browser.pause(3000)
          await $("input[name='username']").setValue('Rahul')
          await browser.pause(3000)

          //custonmized xpath 
          //    //tagname[@attribute='value']

          await $("//input[@name='password']").setValue('learning')
          //await browser.pause(3000)

          await $("#signInBtn").click();
          //await browser.pause(3000)
          const error = await console.log((await $(".alert-danger")).getText())
          console.log('Error Msg - ' + error)
          //waitUntil--  it wait until condition not match 

          await browser.waitUntil(async () => await $("#signInBtn").getAttribute('value') === 'Sign In',
               {
                    timeoutMsg: 'Error Msg not displayed'
               })

          const erroMessage = await $(".alert-danger").getText()
          await console.log(await $(".alert-danger").getText())
          await console.log('Error Msg after implemetning waitUntil - ' + erroMessage)


          // to assert the text 
          //frist grab the text and validate it 
          // using expect expect and toHaveTextContaining
          await expect($('p')).toHaveTextContaining('rahulshettyacademy')

     })

     it('Login Success page title', async () => {

          await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
          await $('#username').setValue('rahulshettyacademy')
          await $("//input[@name='password']").setValue('learning')
          await $("#signInBtn").click();
          //when we click sign button we have to wait for checkout button to be appear
          //waitForExist()   -> it will wait until element appear 
          await (await $(".btn-primary")).waitForExist()
          // to validate the url text contains certains text or not
          await expect(browser).toHaveUrlContaining('shop')
          //to validate the extact match of title
          await expect(browser).toHaveTitle('ProtoCommerce')

          // when we run this test file all it block will run but if want to exclude any it block use  
          // lettter "x" in front of it block 

          //how to run the test different browser 
          //we need to go in in wdio.config.js file and make change in capabilities  -> browserName:
          //  capabilities: [{
          //      browserName: 'chrome'
          //  }],



     })
})