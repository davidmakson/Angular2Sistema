import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DayPilot } from "daypilot-pro-angular";
import { DataService } from "./backend/data.service";
import { CreateComponent } from "./dialogs/create.component";

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { routing } from './app.routing';

import { usersRouting } from "./users/users.routing";
import { UsersModule } from "./users/users.module";

import { funcionariosRouting } from "./funcionarios/funcionarios.routing";
import { FuncionariosModule } from "./funcionarios/funcionarios.module";

import { servicosRouting } from "./servicos/servicos.routing";
import { ServicosModule } from "./servicos/servicos.module";

import { CalendarComponent } from "./calendar/calendar.component";
import { calendarRouting } from "./calendar/calendar.routing";

import { SchedulerComponent } from "./scheduler/scheduler.component";

import { HttpUtilService } from './services/http-util-service';@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CalendarComponent,
    NotFoundComponent,
    CreateComponent,
    SchedulerComponent,
    DayPilot.Angular.Calendar,
    DayPilot.Angular.Modal,
    DayPilot.Angular.Navigator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterializeModule,
    UsersModule,
    usersRouting,
    FuncionariosModule,
    funcionariosRouting,
    ServicosModule,
    servicosRouting,
    calendarRouting,
    routing,
  ],
  providers: [DataService,HttpUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
