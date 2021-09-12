import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  // {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  // {path: 'home' , component: HomeComponent},
  // {path: 'About' , component: AboutComponent},
   
  {path: '' , redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home' , component: HomeComponent},

  //   {path: 'skills' , component: SkillsComponent},
  //   {path: 'projects' , component: ProjectsComponent},
    //  {path: 'contact' , component: ContactComponent},
  // {path: 'about' , component: AboutComponent},
    //  {path: 'experience' , component: ExperienceComponent},
    // {path: 'footer' , component: FooterComponent},

  
  
];




@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, {useHash: true})],

  exports: [RouterModule]
})
export class AppRoutingModule { }

