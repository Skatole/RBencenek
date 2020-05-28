import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstDirectiveDirective } from './first-directive.directive';
import { RedColorDirective } from './red-color.directive';
import { FirstBoldDirective } from './first-bold.directive';
import { UserServiceService } from './user-service.service';
import { UserComponent } from './user/user.component';
import { CarsComponent } from './cars/cars.component';
import { CarService } from './car.service';
import { FilterComponent } from './filter/filter.component';
import { FruitsComponent } from './forms/fruits/fruits.component';
import { UserListComponent } from './user2/user-list/user-list.component';
import { NewUserComponent } from './user2/new-user/new-user.component';
import { MainComponent } from './user2/main/main.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './user2/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FirstDirectiveDirective,
    RedColorDirective,
    FirstBoldDirective,
    UserComponent,
    CarsComponent,
    FilterComponent,
    FruitsComponent,
    UserListComponent,
    NewUserComponent,
    MainComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule

  ],
  providers: [UserServiceService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
