import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './cards/cards.component';
import { BodyofcourseComponent } from './bodyofcourse/bodyofcourse.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TableModule } from 'primeng/table';

import { AlertModule, ButtonModule } from 'ng-cdbangular';
import { BodyComponent } from './body/body.component';
import { BodyofcoursecontentComponent } from './bodyofcoursecontent/bodyofcoursecontent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardsComponent,
    BodyofcourseComponent,
    BodyComponent,
    BodyofcoursecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
    ,ReactiveFormsModule,
    FormsModule,FontAwesomeModule,
    BrowserAnimationsModule,
     NgbModule,NgbAccordionModule, AlertModule,
     ButtonModule,MatSidenavModule,TableModule,NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
