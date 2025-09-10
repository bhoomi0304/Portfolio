import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // loggeddata:any;
  // constructor(){
  //   const localData=localStorage.getItem("signupUser");
  //   if(localData){
  //     this.loggeddata=JSON.parse(localData);

  //   }
  // }
  username: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser(): void {
    const loginData = localStorage.getItem('angularlocal');
    if (loginData) {
      const user = JSON.parse(loginData);
      this.username = user.username;
    }
    else {
      this.username = null;
    }
  }

  logoff(){
    localStorage.removeItem('loginUser'); 
    this.router.navigate(['/register']); 
  }
}
