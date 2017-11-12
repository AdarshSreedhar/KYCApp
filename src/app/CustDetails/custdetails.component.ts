import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustDetailsService } from "./custdetails.service";
import {Observable} from 'rxjs/Rx';
//import {OutputFormat} from './OutputFormat';
@Component({
    selector:'custdetails',
    templateUrl:'custdetails.component.html',
    styleUrls:['custdetails.component.css'],
    providers:[CustDetailsService]
})
export class CustDetailsComponent
{
    constructor(private formService:CustDetailsService,private route:ActivatedRoute,private router:Router){}
    returnedData:string;
    loading:boolean;
    GetDetails(PAN:string,Aadhaar:number)
    {
        let formdetails={
                            /*model it as a json object */
                            "stream_name":"test-kyc-77",
                            "PAN":PAN,
                            "Aadhaar":Aadhaar
                        };
    this.formService.GetCustDetails(formdetails)
            .subscribe(
                resp=>
                {
                    this.returnedData=resp;
                    console.log(this.returnedData);
                    this.loading=false;    
                },
                error=>
                {
                    return Observable.throw(error);
                }
            );           
    }
}