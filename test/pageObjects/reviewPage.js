class reviewPage{

get productPrices(){
    return $$('tr td:nth-child(4) strong')
}

get totalPrice(){
   return $('tr td:nth-child(5) strong')
}

get checkoutButton(){
   return $('.btn.btn-success')
}

async sumOfProducts(){

  return ((await Promise.all (await  this.productPrices.map(async (productPrice)=>parseInt(
    (await (productPrice.getText()))
    .split(".")[1].trim()))))
    .reduce((acc,price)=>acc+price,0))
}
   async totalFormattedPrice(){
   return   parseInt((await (this.totalPrice.getText())).split(".")[1].trim())
}

}

// export
export default reviewPage;