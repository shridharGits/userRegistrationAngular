import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./Components/dashboard/dashboard.component";
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { UserInfoComponent } from "./Components/user-info/user-info.component";

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'userinfo', component: UserInfoComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, RegisterComponent, LoginComponent, UserInfoComponent]