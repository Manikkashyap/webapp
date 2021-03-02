import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';



const routes: Routes = [

  {
    path:'gal',
    component:GalleryComponent
  },

  {
    path:'about',
    component:AboutComponent
  },

  {
    path:'contact',
    component:ContactComponent
  },

  {
    path:'template',
    component:TemplateComponent
  },

  {
    path:'reactive',
    component:ReactiveComponent
  },

  {
    path:'',
    component:HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
