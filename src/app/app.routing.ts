import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task-list/task.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ListComponent } from './project/list/list.component';
import { FormComponent } from './project/form/form.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/authguard/auth.guard';
import { AdminAuthGuard } from './auth/authguard/admin.auth.guard';
import { UserFormComponent } from './user-form/user-form.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user', component: UserComponent, canActivate: [AuthGuard]},
    { path: 'logout', component: LogoutComponent },
    { path: 'task', component: TaskComponent, canActivate: [AuthGuard] },
    { path: 'task-form/:id', component: TaskFormComponent, canActivate: [AuthGuard] },
    { path: 'user-form/:id', component: UserFormComponent, canActivate: [AuthGuard] },
    { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuard] },
    { path: '',
      redirectTo: '/task',
      pathMatch: 'full'
    },
    { path: '**', redirectTo: '/task' }
];

export const routing = RouterModule.forRoot(appRoutes);