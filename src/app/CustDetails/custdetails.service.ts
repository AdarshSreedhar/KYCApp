import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { DetailsType } from "../Form/formdetails";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class CustDetailsService
{
    constructor(private http:Http){}
    private loginUrl="http://URL/getcustdetails";
    GetCustDetails(body:Object):Observable<DetailsType[]>
    {
        let bodyString=JSON.stringify(body);
        let headers=new Headers({'Content-Type':'application/json'});
        headers.append('Access-Control-Allow-Origin', '*');
        let options=new RequestOptions({headers:headers});
        //you can change this to a get request as well, no problem there machi!
        return this.http.post(this.loginUrl,body,options)
        //we call the .json method on the response because the actual response is not a collection of data but a JSON string
        .map((res:Response)=>res.json())
        .catch((error:any) => Observable.throw(error.json));
    }
}