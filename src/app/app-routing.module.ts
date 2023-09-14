import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent,canActivate:[RouteGuardService] },
  { path: 'todos', component: ListTodosComponent,canActivate:[RouteGuardService]},
  { path: 'logout', component: LogoutComponent,canActivate:[RouteGuardService]},
  { path: 'todos/:id', component: AddTodoComponent,canActivate:[RouteGuardService]},
  { path: 'registration', component: RegistrationComponent},
  { path: 'users', component: UsersComponent,canActivate:[RouteGuardService]},
  { path: 'registration/:id', component: RegistrationComponent,canActivate:[RouteGuardService]},
  { path: 'update/:id', component: UpdateUserComponent,canActivate:[RouteGuardService]},





  







  { path: '**', component: ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
