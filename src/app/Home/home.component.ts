import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'home',
    templateUrl:'home.component.html',
    styleUrls:['home.component.css']
})
export class HomeComponent{
    constructor(private router:Router){}
    GoToForm()
    {
        this.router.navigate(['/step1']);
    }
    GoToFetch()
    {
        this.router.navigate(['/getcustdetails']);
    }
    FetchTxnDetails()
    {
        this.router.navigate(['/getTxndetails']);
    }
}