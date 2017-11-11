import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustDetailsService } from "./custdetails.service";
import {Observable} from 'rxjs/Rx';
@Component({
    selector:'custdetails',
    templateUrl:'custdetails.component.html',
    styleUrls:['custdetails.component.css'],
    providers:[CustDetailsService]
})
export class CustDetailsComponent{
    constructor(private formService:CustDetailsService,private route:ActivatedRoute,private router:Router){}
    returnedData:Object;
    loading:boolean;
    GetDetails(/*whatever fields you want to send here*/)
    {
        let formdetails={
                            /*model it as a json object */
                        };
                        
    this.formService.GetCustDetails(formdetails)
            .subscribe(
                resp=>
                {
                    this.returnedData=resp;
                    this.loading=false;    
                },
                error=>
                {
                    return Observable.throw(error);
                }
            );           
    }
}