export class LoginService{
    
        
        constructor() { }

        isLoggedIn:boolean=false;
        login(){
          this.isLoggedIn=true
        }
        logout(){
          console.log('logged out')
          this.isLoggedIn=false
        }
        isAuthenticated(){
            console.log(this.isLoggedIn,'yooo')
          return this.isLoggedIn
        }
}