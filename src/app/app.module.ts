
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './components/appareil/appareil.component';
import { AuthComponent } from './components/auth/auth.component';
import { AppareilViewComponent } from './components/appareil-view/appareil-view.component';
import { SingleAppareilComponent } from './components/single-appareil/single-appareil.component';
import { FourOhFourComponent } from './components/four-oh-four/four-oh-four.component';

import { AuthService } from './services/auth.service';
import { AppareilService } from './services/appareil.service';
import { AuthGuard} from './services/auth-guard.service';
import { EditAppareilComponent } from './components/edit-appareil/edit-appareil.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './components/user-list/user-list.component';
import { NewUserComponent } from './components/new-user/new-user.component';



@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
