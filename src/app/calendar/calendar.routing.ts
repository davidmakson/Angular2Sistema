import { Routes, RouterModule } from '@angular/router';

import { CalendarComponent } from './calendar.component';

const calendarRoutes: Routes = [
  { path: 'agenda', component: CalendarComponent, pathMatch: 'full' }
];

export const calendarRouting = RouterModule.forChild(calendarRoutes);
