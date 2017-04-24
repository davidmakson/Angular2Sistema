import { Component, OnInit } from '@angular/core';
import {ServicosService} from "./shared/servicos.service";
import {Servico} from "./shared/servico";

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  private servicos: Servico[] = [];

  constructor(private servicosService: ServicosService) { }

  ngOnInit() {
    this.servicosService.getServicos()
      .subscribe(data => this.servicos = data);
  }

  deleteServico(servico){
    if (confirm("Are you sure you want to delete " + servico.name + "?")) {
      var index = this.servicos.indexOf(servico);
      this.servicos.splice(index, 1);

      this.servicosService.deleteServico(servico.id)
        .subscribe(null,
          err => {
            alert("Could not delete servico.");
            // Revert the view back to its original state
            this.servicos.splice(index, 0, servico);
          });
    }
  }

}
