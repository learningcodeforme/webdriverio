class checkoutPage{

   get country(){
      return $('#country')
  }
  
  get waitForCountryName(){
     return $('.lds-ellipsis')
  }
  
  get checkoutButton(){
     return $('.btn.btn-success')
  }
  get selectedCountry(){
   return $('=India')
  }

  get submit(){
   return $("input[type='submit']")
  }

  get sucessMessage(){
   return $('.alert-success')
  }
  
  async countryName(country){
   await this.country.setValue(country)

  }

 
     
  
}

// export
export default checkoutPage;