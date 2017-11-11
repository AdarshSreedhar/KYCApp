import {Component,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "./form.service";
import {Observable} from 'rxjs/Rx';

@Component({
    selector:'forms',
    templateUrl:'form3.component.html',
    providers:[FormService]
})
export class FormComponent3
{
     constructor(private formService:FormService,private route:ActivatedRoute,private router:Router){}
     ngOnInit(){}
 SubmitOTP(otp:number)
 {
     if(otp==this.formService.RetrieveOTP())
     {
         alert("successful otp validation.KYC Done!");
         this.formService.SendFullData();
         this.router.navigate(['/home']);
     }
     else
     {
         alert("Authentication Failed!");
     }
 }
}