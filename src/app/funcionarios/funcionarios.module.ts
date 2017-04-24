import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { FuncionariosComponent } from './funcionarios.component';
import { FuncionariosService } from './shared/funcionarios.service';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    FuncionariosComponent,
    FuncionarioFormComponent
  ],
  exports: [
    FuncionariosComponent
  ],
  providers: [
    FuncionariosService
  ]
})
export class FuncionariosModule { }
