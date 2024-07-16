class shopPage{

get checkout(){
    return $("*=Checkout")
}

 get cards() {
    return $$("div[class='card h-100']")
 }

async addProductToCart(products){

    for(let i=0;i< await this.cards.length;i++){
          const card = await this.cards[i].$('div h4 a')
          console.log("card Title - " + await card.getText())
                if(products.includes(await card.getText())){
                 await this.cards[i].$('div button').click()   
        }
    }
 
}
}

// export
export default shopPage;