describe("Handle windows and frames",async()=>{

    xit(" Parent child window switch",async()=>{
       await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
       await $('.blinkingText').click()
       // to handle mmultiple window - getWindowHandles  - it is an array to get all windows
       const handles =await browser.getWindowHandles();
       // to move the control to child window - switchToWindow
       await browser.switchToWindow(handles[1]);
      console.log( await $('h1').getText())
      console.log("Child  Window tile - "+ await browser.getTitle())
      // to close the child window -closeWindow()
      await browser.closeWindow()
      //to move the control to main  window - switchToWindow
      await browser.switchToWindow(handles[0])
      console.log("Main Window tile - "+ await browser.getTitle())
  
      // opening brand new webapge
       await browser.newWindow('https://google.com/')
      console.log("new Window tile - "+ await browser.getTitle())

      //to flip the main window we use switchWindow()
      await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/")
      console.log("Parent  Window tile - "+ await browser.getTitle())

 // switchtoWindow -- window open by application by some click -to move control back to parent we use swtichToWindow()
 // swtichWindow - window open by code as new to move control back to parent we use swtichWindow 
      await $('#username').setValue('I switch back to parent window')
      await browser.pause(3000)
    })
    
    it("Frame handeling",async()=>{
      await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
      await $('#mousehover').scrollIntoView()
       await browser.pause(3000)
       // to getnumber of link in page
      console.log('Number of link in main page - '+ await $$('a').length)
      //to switch to frame passing frame loctor in .switchToFrame()
       await  browser.switchToFrame(await $('#courses-iframe'))
       //to get tag  name of using linktext "=Name_of_link"
       console.log((await $('=Courses')).getTagName())
       console.log('Number of link in Frame page - '+ await $$('a').length)
       //to switch back to main window from frame we need to pass null in switchToFrame
       await  browser.switchToFrame(null)
       console.log('Number of link in main page - '+ await $$('a').length)


    })
})