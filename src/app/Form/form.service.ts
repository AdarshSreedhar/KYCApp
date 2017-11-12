import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { DetailsType } from "./formdetails";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class FormService
{
    constructor(private http:Http){}
    dataStore={};
    private UrlStep1="https://35.193.71.99:3000/validate";
    private UrlStep2="http://checkStep2Verification";
    private UrlStep3="http://checkStep2Verification";
    otp:number;
    ValidateStep1(body:Object):Observable<Object[]>
    {
        let bodyString=JSON.stringify(body);
        let headers=new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin', '*');
        let options=new RequestOptions({headers:headers});
        return this.http.post(this.UrlStep1,body,options)
        //we call the .json method on the response because the actual response is not a collection of data but a JSON string
        .map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json));
    }
    ValidatePANDetails(body:Object):Observable<Object[]>
    {
        let bodyString=JSON.stringify(body);
        let headers=new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin', '*');
        let options=new RequestOptions({headers:headers});
        return this.http.post(this.UrlStep2,body,options)
        //we call the .json method on the response because the actual response is not a collection of data but a JSON string
        .map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json));
    }
    ValidateAadhaarNo(body:Object):Observable<Object[]>
    {
        let bodyString=JSON.stringify(body);
        let headers=new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin', '*');
        let options=new RequestOptions({headers:headers});
        return this.http.post(this.UrlStep2,body,options)
        //we call the .json method on the response because the actual response is not a collection of data but a JSON string
        .map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json));
    }
    SendFullData()
    {
        //let bodyString=JSON.stringify(body);
        let headers=new Headers();
        headers.set('Content-Type','application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        //headers.set('apikey', '275Z1688K87589ZW');
        let options=new RequestOptions({headers:headers,method:"POST"});
        return this.http.post(this.UrlStep3,this.dataStore,options)
        //we call the .json method on the response because the actual response is not a collection of data but a JSON string
        .map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json));
    }
    StoreOTP(otp:number)
    {
        this.otp=otp;
    }
    RetrieveOTP()
    {
        return this.otp;
    }
    InsertDataStep1(body:Object)
    {
        //Object.assign(this.dataStore,body[]);
        this.dataStore["CustomerID"]=body["CustomerID"];
    }
    RetrieveCustID()
    {
        return this.dataStore["CustomerID"];
    }
    InsertDataStep2(body:Object)
    {
        Object.assign(this.dataStore,body);
        JSON.stringify(this.dataStore);
    }
    IsObjectEmpty()
    {
        return Object.keys(this.dataStore).length === 0 && this.dataStore.constructor === Object;
    }
    RetrievePANDetails(body:Object):Observable<Object[]>
    {
        let bodyString=JSON.stringify(body);
        let headers=new Headers();
        headers.set('Content-Type','application/json');
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('apikey', '275Z1688K87589ZW');
        let options=new RequestOptions({headers:headers,method:"POST"});
        return this.http.post(this.UrlStep1,body,options)
        //we call the .json method on the response because the actual response is not a collection of data but a JSON string
        .map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json));
    }
}
//FGFSAS1240C