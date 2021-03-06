import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JWTInterceptor } from './shared/login/jwt.interceptor';
import { LoginModule } from './shared/login/login.module';
import { UiModule } from './shared/ui/ui.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiModule,
    AppRoutingModule,
    LoginModule,
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
