import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ServicosService {

  private url: string = "http://jsonplaceholder.typicode.com/servicos";

  constructor(private http: Http) { }

  getServicos(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getServico(id){
    return this.http.get(this.getServicoUrl(id))
      .map(res => res.json());
  }

  addServico(servico){
    return this.http.post(this.url, JSON.stringify(servico))
      .map(res => res.json());
  }

  updateServico(servico){
    return this.http.put(this.getServicoUrl(servico.id), JSON.stringify(servico))
      .map(res => res.json());
  }

  deleteServico(id){
    return this.http.delete(this.getServicoUrl(id))
      .map(res => res.json());
  }

  private getServicoUrl(id){
    return this.url + "/" + id;
  }
}
