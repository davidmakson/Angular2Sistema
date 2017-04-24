import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FuncionariosService {

  private url: string = "http://jsonplaceholder.typicode.com/funcionarios";

  constructor(private http: Http) { }

  getFuncionarios(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getFuncionario(id){
    return this.http.get(this.getFuncionarioUrl(id))
      .map(res => res.json());
  }

  addFuncionario(funcionario){
    return this.http.post(this.url, JSON.stringify(funcionario))
      .map(res => res.json());
  }

  updateFuncionario(funcionario){
    return this.http.put(this.getFuncionarioUrl(funcionario.id), JSON.stringify(funcionario))
      .map(res => res.json());
  }

  deleteFuncionario(id){
    return this.http.delete(this.getFuncionarioUrl(id))
      .map(res => res.json());
  }

  private getFuncionarioUrl(id){
    return this.url + "/" + id;
  }
}
