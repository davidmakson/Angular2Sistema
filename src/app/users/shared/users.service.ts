import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { HttpUtilService } from '../../services/http-util-service';

@Injectable()
export class UsersService {

private path = 'cliente';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

  getUsers(){
    return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  getUser(id){
    return this.http.get(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  addUser(user){
		let params = JSON.stringify(user);

    	return this.http.post(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
  }

  updateUser(user){
		let params = JSON.stringify(user);

    	return this.http.put(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  deleteUser(id){
    return this.http.delete(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  private getUserUrl(id){
    return this.getUser(id);
  }
}
