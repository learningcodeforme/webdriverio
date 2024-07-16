import { expect } from 'chai';
describe("Ecommerce Application",async()=>{

    it("End to End Test",async()=>{

const products =['iphone X','Samsung Note 8']
await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
await $('#username').setValue('rahulshettyacademy')
await $("//input[@name='password']").setValue('learning')
await $("#signInBtn").click();
//using *=text - for partial link text ( astrike make as regular expression) checkout out is link 
// we need to see anchor a in text then use this above concept
const link=await $("*=Checkout")
//await (await $("*=Checkout")).waitForExist()
await link.waitForExist()
//is theere is space between classname it mean it is two class and we need ot put dot (.)
// inplace of space we have class name is  "card h-100" to make it work we pot dot(.)  .card.h-100
// we can aslo use  tage name then arribute then it value  div is tagname, class is attribute and value in ''
//div[class='card h-100']
const cards  =await $$("div[class='card h-100']")

for( let i=0;i< await cards.length;i++){

    //we have first card cards[i] and the we chain with locator
   const card = await cards[i].$('div h4 a')
   console.log("card Title - " + await card.getText())
    if(products.includes(await card.getText())){
        // we reach to each product and the we chaining locator to  click "Add Button"  using $()
        await cards[i].$('div button').click()
    }
}

 await link.click()
 await browser.pause(30000)
 const productPrices=await $$('tr td:nth-child(4) strong')


// Promise All - there are multiple await so we use Promise all to handle it
// map -> to create new array based on some operation
// parseInt to convert Stirng into integer
// getText() -to get text of locator
// Split() - split to split unwanted character 
// trim() - to trim the white space
// reduce() - to add the number in array  
const totalPrices=(await Promise.all (await  productPrices.map(async (productPrice)=>parseInt((await (productPrice.getText())).split(".")[1].trim()))))
.reduce((acc,price)=>acc+price,0)
console.log("Total Price of Product seleted - "+ totalPrices)

const totalPrice=await $('tr td:nth-child(5) strong')
const finalPrice = parseInt((await (totalPrice.getText())).split(".")[1].trim())
console.log("Final Price - "+ finalPrice)
expect(totalPrices).to.equal(finalPrice)
await $('.btn.btn-success').click()
await $('#country').setValue('ind')
// when we type "ind" we seen it take time to load so we see three dot
// it css is  .lds-ellipsis we have to wait when it disappear ( so we use waitForExist({reverse:true})  )
// it will reverse that
await $('.lds-ellipsis').waitForExist({reverse:true})
await $('=India').click()
await $("input[type='submit']").click()
console.log( "Success Message - + " + await $('.alert-success').getText())



})
})