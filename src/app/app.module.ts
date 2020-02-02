import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { NavComponent } from './core/layout/nav/nav.component';
import { ContentLayoutComponent } from './core/layout/content-layout/content-layout.component';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { fakeBackendProvider } from './interceptor/fake-backend.interceptor';
import { AuthGuard } from './guard/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginLayoutComponent } from './core/layout/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    LoginLayoutComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    // angular
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    // 3rd party

    // core & shared

    //app
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
