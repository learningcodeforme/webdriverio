
//import { expect } from 'chai';

describe('Functional Testing on the Application ',async()=>{
  
    xit("Scrolling and mouse hover",async()=>{
       await browser.url("https://rahulshettyacademy.com/AutomationPractice/");

       //mousehover 
       //we need to scroll the page till our required element not found 
       //scrollIntoView() to scroll
       await $('#mousehover').scrollIntoView()
       await browser.pause(3000)
       await $('#mousehover').moveTo()
       await browser.pause(3000)

       //<a href="#top">Top</a>
       //here we have to click on Top text  so we use link text ( here it is Top ,and we use "=" sign before it)
       await $('=Top').click()
       await browser.pause(30000)
      
       })

       xit("Alert Handling ",async()=>{
        await browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html");
          await browser.pause(3000)
        await $('button').doubleClick();
      // we are not able to validate is alert is openining or not because it open and close very fast
        // await browser.isAlertOpen();
         // await browser.acceptAlert();
        })
    
        xit("Table handling",async()=>{
            await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
            //here we deals with table
            //table have tr - table row 
            //            th - table header

            // first tr ( table row will come then table header come )
            //css to get first header - tr th:nth-child(1)
            // here tr -table row , th table header and to go sepecific header :nth-child()- Index to be give
            // in XPATH - //tr/th[1]  

           //(await $('tr th:nth-child(1)')).click()
            browser.pause(3000)
             

            //logic
            //1 .get the list all item it array A 
            //2.  sort array A - Array B 
            //3. Array A =Array B
          const dropdown =await $('select')
          await dropdown.selectByAttribute("value","20")
        //step 1 - >  
        // step 1.1 get all the locator in one variable ( it is  an array)
         const veggiLocators=await $$('tr td:nth-child(1)');
         //1.2 retive the text from each locator and added in new array using map 
         const veggiNames = await veggiLocators.map(veggi=>veggi.getText())
         console.log("Item name - "+veggiNames)
          browser.pause(30000)
         //after soritng
         await $('tr th:nth-child(1)').click()
         browser.pause(30000)
         const veggiLocators1=await $$('tr td:nth-child(1)');
         const veggiNames1 = await veggiLocators1.map(veggi1=>veggi1.getText())
         browser.pause(30000)

         console.log("Item name before sort - "+veggiNames)
         console.log("Item name  after sort - "+veggiNames1)
         
         //Arrray passed as reference so we should perform sort on copy of array 
         //to copy an array in js we use slice method
         const vegiNameCopy=veggiNames.slice();
          // sorting the array A and stored in Array B
          const sortedVeggiName = vegiNameCopy.sort();

          console.log("Orignal vegi names     - " + veggiNames)
          console.log('Sorted vegitable names - ' + sortedVeggiName)
      //  //impport chai assestion and compare twp array 
       //expect(veggiNames).to.be.equals( sortedVeggiName)
       //expect(vegiNameCopy).to.be.equals( sortedVeggiName)
      

        // how to debug webdriver io using vs code 
        //Step 1 - > install javascript debugger nightly extension
        // Step 2 -t's possible to run all or selected spec file(s). 
        // Debug configuration(s) have to be added to .vscode/launch.json,
        //to debug selected spec add the following config:

        // here when try to run in debug mode it we noticed it passed the value in sorted
        //order before sorting because we perform sort on orginal array 
        // so orginal array got sorted because in javascript array is passed  
        // by refenernce

           
            })

            it("search funcationality ",async()=>{
              await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
             await $('#search-field').setValue('Tomato')
             await browser.pause(3000)
             // get the elements appear in tables in arry using $$
            const items= await $$('tr td:nth-child(1)')
            //check the size of the array 
            expect(items).toBeElementsArrayOfSize({eq:1})
            //get the text of first element of array using getText() 
            console.log(" value of item - " + await items[0].getText())
            //assert text using toHaveText
           await expect(items[0]).toHaveTextContaining('Tomato')
            
            })
      })