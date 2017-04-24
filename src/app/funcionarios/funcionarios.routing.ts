import { Routes, RouterModule } from '@angular/router';

import { FuncionariosComponent } from './funcionarios.component';
import {FuncionarioFormComponent} from "./funcionario-form/funcionario-form.component";

const funcionariosRoutes: Routes = [
  { path: 'funcionarios', component: FuncionariosComponent, pathMatch: 'full' },
  { path: 'funcionarios/new', component: FuncionarioFormComponent},
  { path: 'funcionarios/:id', component: FuncionarioFormComponent}
];

export const funcionariosRouting = RouterModule.forChild(funcionariosRoutes);
