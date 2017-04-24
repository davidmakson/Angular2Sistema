import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';

import { ServicosComponent } from './servicos.component';
import { ServicosService } from './shared/servicos.service';
import { ServicoFormComponent } from './servico-form/servico-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    ServicosComponent,
    ServicoFormComponent
  ],
  exports: [
    ServicosComponent
  ],
  providers: [
    ServicosService
  ]
})
export class ServicosModule { }
