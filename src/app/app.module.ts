import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { AuthGuard } from './auth/authguard/auth.guard';
import { AdminAuthGuard } from './auth/authguard/admin.auth.guard';

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
import { UserFormComponent } from './user-form/user-form.component';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    LoginComponent,
    RegisterComponent,
    TaskFormComponent,
    ProfileComponent,
    LogoutComponent,
    ListComponent,
    FormComponent,
    UserComponent,
    UserFormComponent,
    PasswordResetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
