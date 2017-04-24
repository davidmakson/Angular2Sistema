import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { HttpUtilService } from '../../services/http-util-service';

@Injectable()
export class FuncionariosService {

	private path = 'funcionario';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

  getFuncionarios(){
		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  getFuncionario(id){
    return this.http.get(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  addFuncionario(funcionario){
		let params = JSON.stringify(funcionario);

    	return this.http.post(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
  }

  updateFuncionario(funcionario){
		let params = JSON.stringify(funcionario);

    	return this.http.put(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  deleteFuncionario(id){
    return this.http.delete(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  private getFuncionarioUrl(id){
    return this.getFuncionario(id);
  }
}
