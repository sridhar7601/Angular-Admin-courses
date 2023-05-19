import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BodyofcourseComponent } from './bodyofcourse/bodyofcourse.component';
import { CardsComponent } from './cards/cards.component';
import { BodyComponent } from './body/body.component';
import { BodyofcoursecontentComponent } from './bodyofcoursecontent/bodyofcoursecontent.component';
const routes: Routes = [
  {path:"",component:CardsComponent},{path:"bodyofcoursecontent",component:BodyofcoursecontentComponent},
 {path:"body",component:BodyComponent,
children:[
  {path:"bodyofcoursecontent",component:BodyofcoursecontentComponent},
  {path:"bodyofcourses/:id",component:BodyComponent
}
]}
//   {path:"bodyofcoursecontent/:id",component:BodyofcoursecontentComponent
// c}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
