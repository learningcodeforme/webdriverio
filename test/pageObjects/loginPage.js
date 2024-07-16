class loginPage{

get userName(){
    return $('#username')
}

get password(){
    return $("//input[@name='password']")
}

get signIn()
{
    return $("#signInBtn")
}

get alert()
{
   return  $(".alert-danger")
}
 get textInfo(){
    return $('p')
 }
 
  async Login(userName,password){
  await this.userName.setValue(userName)
  await this.password.setValue(password)
  await this.signIn.click()

 }


}
// to make class visible to we need to make use module.exports =new className 
// this line should be last line of file
//module.exports= new loginPage()
// export
export default loginPage;