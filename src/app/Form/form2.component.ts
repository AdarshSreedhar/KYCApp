import {Component,Inject} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormService } from "./form.service";
import {Observable} from 'rxjs/Rx';

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
ngOnInit()
{
    /*if(this.formService.IsObjectEmpty())
    {
        alert("Complete Step 1 Properly");
        this.router.navigate(['/step1']);
    }*/
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