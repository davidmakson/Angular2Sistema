import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { HttpUtilService } from '../../services/http-util-service';

@Injectable()
export class ServicosService {

private path = 'servico';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

  getServicos(){
    return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  getServico(id){
    return this.http.get(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  addServico(servico){
		let params = JSON.stringify(servico);

    	return this.http.post(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
  }

  updateServico(servico){
		let params = JSON.stringify(servico);

    	return this.http.put(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  deleteServico(id){
    return this.http.delete(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  private getServicoUrl(id){
    return this.getServico(id);
  }
}
