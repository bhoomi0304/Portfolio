// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from "./header/header.component";

// import { FooterComponent } from "./footer/footer.component";


// import { NavbarComponent } from "./navbar/navbar.component";
// // import { HomeComponent } from './home/home.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   // imports: [RouterOutlet, HeaderComponent, MenuComponent, FooterComponent, AboutComponent, ContactComponent,
//   //   SkillsComponent, EducationComponent, ExperianceComponent, HomeComponent, NavbarComponent],
//   imports: [RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'miniproject';
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
  
    SkillsComponent,
    EducationComponent,
    ExperianceComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
