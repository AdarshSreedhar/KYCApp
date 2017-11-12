import {Component,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "./form.service";
import {FormBuilder,FormGroup,FormArray,Validators,FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
const PANCARD_REGEX="[A-Za-z]{5}\d{4}[A-Za-z]{1}";
const AADHAAR_REGEX="[0-9]{16}";
const PIN_REGEX="[0-9]{6}";
const PHONE_REGEX="[1-9][0-9]{9}";
@Component({
    selector:'forms',
    templateUrl:'form2.component.html',
    providers:[FormService]
})
export class FormComponent2
{
  constructor(private formService:FormService,private route:ActivatedRoute,private router:Router){}
  custID=this.formService.RetrieveCustID();
  PANDetailsVerificationText:boolean=false;
  PANDetailsVerificationTextVerified:boolean=false;
  AadhaarDetailsVerificationText:boolean=false;
  AadhaarDetailsVerificationTextVerfied:boolean=false;
  OTPType:string;
  PANCardFormControl=new FormControl('',[Validators.required,Validators.pattern(PANCARD_REGEX)]);
  AadhaarFormControl=new FormControl('',[Validators.required,Validators.pattern(AADHAAR_REGEX)]);
  PINFormControl=new FormControl('',[Validators.required,Validators.pattern(PIN_REGEX)]);
  AddrFControl=new FormControl('',[Validators.required]);
  FNameFControl=new FormControl('',[Validators.required]);
  LNameFControl=new FormControl('',[Validators.required]);
  MobileFormControl=new FormControl('',[Validators.required,Validators.pattern(PHONE_REGEX)]);
ngOnInit()
{
    if(this.formService.IsObjectEmpty())
    {
        alert("Complete Step 1 Properly");
        this.router.navigate(['/step1']);
    }
}
OTPRequestTypes = [
    'Message',
    'Call',
  ];
 VerifyDetails(Fname:string,Mname:string,Lname:string,PANCardNo:string,AadharNo:string,PassportNo:string,LineAddress1:string,LineAddress2:string,LineAddress3:string,Pin:string,City:string,State:string,AddressProof:string,MobileNo:string,LandlineNo:string,OTPType:string)
 {
    this.PANDetailsVerificationText=true; 
    let bodyObj={PANCardNo:PANCardNo,AadharNo:AadharNo,PassportNo:PassportNo,LineAddress1:LineAddress1,LineAddress2:LineAddress2,LineAddress3:LineAddress3,Pin:Pin,City:City,State:State,AddressProof:AddressProof,MobileNo:MobileNo,LandlineNo:LandlineNo}
    this.formService.ValidatePANDetails({Fname:Fname,Mname:Mname,Lname:Lname,PANCardNo:PANCardNo})
    .subscribe
    (
        res1=>
        {
            if(res1["valid"])
            {
                this.PANDetailsVerificationTextVerified=true;
                this.AadhaarDetailsVerificationText=true;
                this.formService.ValidateAadhaarNo({AadharNo:AadharNo,MobileNo:MobileNo,OTPType:OTPType}).subscribe
                (
                    res2=>
                    {
                        if(res2["valid"])
                        {
                            this.AadhaarDetailsVerificationTextVerfied=true;
                            this.formService.InsertDataStep2({bodyObj});
                            this.formService.StoreOTP(res2["OTP"]);
                            this.router.navigate(['/step3']);
                        }
                        else console.log("aadhaar phone number did not match");
                    },
                    err=>console.log(err)
                );
                this.formService.InsertDataStep2({bodyObj});
                this.router.navigate(['/step3']);
            }
            else
                console.log("not verified");
        },
        err=>console.log(err)
    );
 }
 
}