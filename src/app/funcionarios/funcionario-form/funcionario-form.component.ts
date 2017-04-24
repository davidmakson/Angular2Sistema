import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Funcionario } from '../shared/funcionario';
import { FuncionariosService } from '../shared/funcionarios.service';
import { BasicValidators } from '../../shared/basic-validators';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  funcionario: Funcionario = new Funcionario();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private funcionariosService: FuncionariosService
  ) {
    this.form = formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        BasicValidators.email
        //Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      phone: [],
      address: formBuilder.group({
        street: ['', Validators.minLength(3)],
        suite: [],
        city: ['', Validators.maxLength(30)],
        zipcode: ['', Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]
      })
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Funcionario' : 'New Funcionario';

      if (!id)
        return;

      this.funcionariosService.getFuncionario(id)
        .subscribe(
          funcionario => this.funcionario = funcionario,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }

  save() {
    var result,
        funcionarioValue = this.form.value;

    if (funcionarioValue.id){
      result = this.funcionariosService.updateFuncionario(funcionarioValue);
    } else {
      result = this.funcionariosService.addFuncionario(funcionarioValue);
    }

    result.subscribe(data => this.router.navigate(['funcionarios']));
  }
}
