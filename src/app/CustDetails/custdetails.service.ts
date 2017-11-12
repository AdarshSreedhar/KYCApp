import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { Transaction } from "./Transaction";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class CustDetailsService
{
    constructor(private http:Http){}
    private Url="http://35.193.71.99:8080/get";
    GetCustDetails(body:Object):Observable<string>
    {
        let bodyString=JSON.stringify(body);
        let headers=new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin', '*');
        let options=new RequestOptions({headers:headers});
        return this.http.post(this.Url,body,options)
        //we call the .json method on the response because the actual response is not a collection of data but a JSON string
        //.map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json));
    }
}