import {Component} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TxnDetailsService } from "./txndetails.service";
import { Router,ActivatedRoute } from "@angular/router";
import {Transaction} from '../CustDetails/Transaction';
/**
 * @title Basic table
 */
@Component({
  selector: 'txndetails',
  styleUrls: ['txndetails.component.css'],
  templateUrl: 'txndetails.component.html',
  providers:[TxnDetailsService]
})
export class TxnDetailsComponent 
{
  constructor(private route:ActivatedRoute,private router:Router,private txnService:TxnDetailsService){}
  //displayedColumns = ['txnid','key','data','publisher'];
  //dataSource = new ExampleDataSource();
  ngOnInit()
  {
    console.log(this.txnService.ListAllData({"stream_name":"kyc-test-77","no_records":1}));
  }
}
/*
const data:string[]=this.txnService.ListAllData({"stream_name":"kyc-test-77","no_records":1});
export class ExampleDataSource extends DataSource<any> {
  
  connect(): Observable<string[]> 
  {
    return Observable.of(data);
  }

  disconnect() {}
}
*/
