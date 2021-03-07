import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FlashMessagesModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
