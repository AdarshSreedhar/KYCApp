import {Component,Inject,Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "./form.service";
import {Observable} from 'rxjs/Rx';
import {FormControl,Validators,FormBuilder,FormGroup} from '@angular/forms';
const CUSTID_REGEX ="^([1-9][0-9]*)$";
@Component({
    selector:'forms',
    templateUrl:'form1.component.html',
    providers:[FormService] 
})
export class FormComponent1
{
    username:FormControl;
    password:FormControl;
    progressSpinner:boolean=false;
    
    public customerIDFormControl: FormGroup;
    constructor(private formService:FormService,private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder)
    {
         /*this.customerIDFormControl = this.formBuilder.group
         ({
            username:    new FormControl('', [
                        Validators.required,
                        Validators.minLength(9),
                        Validators.maxLength(9)]),
            password:    new FormControl('',[Validators.required])        
        });*/
    }
    /*form:FormGroup;
    custIDFormControl:FormControl;
    passwordFormControl:FormControl;
    ngOnInit()
    {
        this.form=this.formBuilder.group({
            custIDFormControl: new FormControl('', [Validators.required, Validators.pattern(CUSTID_REGEX)]),
            passwordFormControl: new FormControl('', [Validators.required])
        });
    }*/
    
    custIDFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(CUSTID_REGEX)]);
    passwordFormControl=new FormControl('',[<any>Validators.required]);

 VerifyCust(customerID:string,password:string,$event)
 {
     let bodyObj={customerID:customerID,password:password};
     this.progressSpinner=true;
    this.formService.ValidateStep1(bodyObj)
    .subscribe
    (
        res=>
        {
            if(res["valid"])
            {
                this.formService.InsertDataStep1(bodyObj)
                this.router.navigate(['/step2']);
            }
            else
                console.log("not verified");
        },
        err=>console.log(err)
    );
 }
}