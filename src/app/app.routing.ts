import { Routes,RouterModule } from "@angular/router";
import {HomeComponent} from "./Home/home.component"
import { FormComponent1 } from "./Form/form1.component";
import { FormComponent2 } from "./Form/form2.component";
import { FormComponent3 } from "./Form/form3.component";
import { CustDetailsComponent } from "./CustDetails/custdetails.component";
const appRoutes:Routes=
[
        {path:'',component:HomeComponent},
        {path:'step1',component:FormComponent1},
        {path:'step2',component:FormComponent2},
        {path:'step3',component:FormComponent3},
        {path:'getcustdetails',component:CustDetailsComponent},
        {path:'**',redirectTo:''}
];
export const routing=RouterModule.forRoot(appRoutes);