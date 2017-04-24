import { Routes, RouterModule } from '@angular/router';

import { ServicosComponent } from './servicos.component';
import {ServicoFormComponent} from "./servico-form/servico-form.component";

const servicosRoutes: Routes = [
  { path: 'servicos', component: ServicosComponent, pathMatch: 'full' },
  { path: 'servicos/new', component: ServicoFormComponent},
  { path: 'servicos/:id', component: ServicoFormComponent}
];

export const servicosRouting = RouterModule.forChild(servicosRoutes);
