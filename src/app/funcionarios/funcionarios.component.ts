import { Component, OnInit } from '@angular/core';
import {FuncionariosService} from "./shared/funcionarios.service";
import {Funcionario} from "./shared/funcionario";

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  private funcionarios: Funcionario[] = [];

  constructor(private funcionariosService: FuncionariosService) { }

  ngOnInit() {
    this.funcionariosService.getFuncionarios()
      .subscribe(data => this.funcionarios = data);
  }

  deleteFuncionario(funcionario){
    if (confirm("Are you sure you want to delete " + funcionario.name + "?")) {
      var index = this.funcionarios.indexOf(funcionario);
      this.funcionarios.splice(index, 1);

      this.funcionariosService.deleteFuncionario(funcionario.id)
        .subscribe(null,
          err => {
            alert("Could not delete funcionario.");
            // Revert the view back to its original state
            this.funcionarios.splice(index, 0, funcionario);
          });
    }
  }

}
