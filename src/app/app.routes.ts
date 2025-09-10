import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     // we are using the lazy loading
    //     path: '',
    //     loadComponent: () =>
    //       import('./login/login.component').then((c) => c.LoginComponent),
    //   },
      {
        // we are using the lazy loading
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./contact/contact.component').then((c) => c.ContactComponent),
      },
     
      {
        path:'education',
        loadComponent:()=>
            import('./education/education.component').then((c)=> c.EducationComponent)
      },
      {
        path:'experience',
        loadComponent:()=>
            import('./experiance/experiance.component').then((c)=> c.ExperianceComponent)
      },
      {
        path:'projects',
        loadComponent:()=>
            import('./projects/projects.component').then((c)=> c.ProjectsComponent)
      },
      {
        path:'skills',
        loadComponent:()=>
            import('./skills/skills.component').then((c)=> c.SkillsComponent)
      },
      // {
      //   path:'login',
      //   loadComponent:()=>
      //       import('./login/login.component').then((c)=> c.LoginComponent)
      // }
      // {
      //   path:'home',
      //   loadComponent:()=>
      //       import('./home/home.component').then((c)=> c.HomeComponent)
      // }
      {
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}

     
];
