import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateBackgroundPipe } from './update-background.pipe';
import { MakeListComponent } from './make-list/make-list.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsService } from './user-details.service';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    UpdateBackgroundPipe,
    MakeListComponent,
    UsersComponent,
  ],
  bootstrap: [AppComponent],
  providers: [UserDetailsService],
})
export class AppModule {}
