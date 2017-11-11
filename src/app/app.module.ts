import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule,MatSelectModule,MatInputModule,MatFormFieldModule,MatStepperModule,MatProgressSpinnerModule,MatRadioModule,MatCheckboxModule } from "@angular/material";
import {HttpModule} from '@angular/http';
import { routing }  from './app.routing';
import { HomeComponent } from "./Home/home.component";
import { FormComponent1 } from "./Form/form1.component";
import { FormComponent2 } from "./Form/form2.component";
import { FormComponent3 } from "./Form/form3.component";
import { CustDetailsComponent } from "./CustDetails/custdetails.component";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,CustDetailsComponent,FormComponent1,FormComponent2,FormComponent3,HomeComponent
  ],
  imports: [
    FormsModule,ReactiveFormsModule,BrowserModule,MatButtonModule,MatStepperModule,MatCheckboxModule,MatSelectModule,MatInputModule,MatRadioModule,MatProgressSpinnerModule,MatFormFieldModule,routing,HttpModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
