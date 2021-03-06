import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent as AdminAddProductComponent } from "./components/admin/products/add/add.component";
import { UpdateComponent as AdminUpdateProductComponent } from "./components/admin/products/update/update.component";
import { DeleteComponent as AdminDeleteProductComponent } from "./components/admin/products/delete/delete.component";
import { ListComponent as AdminListProductComponent } from "./components/admin/products/list/list.component";
import { ViewComponent as ViewAdminRequestsComponent } from "./components/admin/requests/view/view.component";
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RootComponent } from './components/root/root.component';
import { LoginComponent } from './components/employee/login/login/login.component';
import { PanelComponent } from './components/employee/panel/panel/panel.component';
import { loginAuthGuard } from './loginAuthGuard';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { UserpanelComponent } from './components/user/userpanel/userpanel.component';
import { UsersignupComponent } from './components/user/usersignup/usersignup.component';
import { EditProfileComponent } from './components/employee/edit-profile/edit-profile.component';
import { AddfundsComponent } from './components/user/addfunds/addfunds.component';
import { EmployeeRequestComponent } from './components/employee/employee-request/employee-request.component';
import { UnlockUserComponent } from './components/employee/unlock-user/unlock-user.component';
import { UpdateStatusComponent } from './components/employee/update-status/update-status.component';
import { ReportComponent } from './components/admin/report/report/report.component';
import { AddEmplopyeeComponent } from './components/admin/add-emplopyee/add-emplopyee.component';
import { DeleteEmplopyeeComponent } from './components/admin/delete-emplopyee/delete-emplopyee.component';

const routes: Routes = [
	// Root
	{ path: "", component: RootComponent },
	// Employee
	{ path: "employee", redirectTo: "/employee/login", pathMatch: "full" },
	{ path: "employee/login", component: LoginComponent },
	{ path: "employee/panel", component: PanelComponent },
	{ path: "employee/sendRequest", component: EmployeeRequestComponent },
	{ path: "employee/unlockUser", component: UnlockUserComponent },
	{ path: "employee/updateStatus", component: UpdateStatusComponent },
	{ path: "employee/editProfile", component: EditProfileComponent },
	// Admin
	{ path: "admin", redirectTo: "/admin/signin", pathMatch: "full" },
	{ path: "admin/signin", component: SignInComponent },
	{
		path: "admin/home", component: HomeComponent,
		children: [
			{ path: "addProducts", component: AdminAddProductComponent, outlet: "adminHome" },
			{ path: "addEmployees", component: AddEmplopyeeComponent, outlet: "adminHome" },
			{ path: "deleteEmployees", component: DeleteEmplopyeeComponent, outlet: "adminHome" },
			{ path: "updateProducts", component: AdminUpdateProductComponent, outlet: "adminHome" },
			{ path: "deleteProducts", component: AdminDeleteProductComponent, outlet: "adminHome" },
			{ path: "listProducts", component: AdminListProductComponent, outlet: "adminHome" },
			{ path: "viewAdminRequests", component: ViewAdminRequestsComponent, outlet: "adminHome" },
			{ path: "generateReport", component: ReportComponent, outlet: "adminHome" },
		]
	},
	// User
	{ path: "user", redirectTo: "user/login", pathMatch: "full" },
	{ path: "user/browseShop", component: ShoppingPageComponent },
	{ path: "user/browseShop/myCart", component: ShoppingCartComponent },
	{ path: "user/login", component: UserloginComponent },
	{ path: "user/signup", component: UsersignupComponent },
  { path: "user/lockUser", component:UserloginComponent},
	{ path: "user/dashboard", component: UserpanelComponent },
	{ path: "user/editProfile", component: EditProfileComponent },
	{ path: "user/addFunds", component: AddfundsComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
