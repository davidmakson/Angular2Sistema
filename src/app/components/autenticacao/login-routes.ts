import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component';
import { LogoutComponent } from './logout-component';
import { LoginService } from '../../services/login-service';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

export const loginRouting = RouterModule.forChild(loginRoutes);