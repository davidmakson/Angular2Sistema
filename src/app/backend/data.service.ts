import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import {DayPilot} from "daypilot-pro-angular";
import EventData = DayPilot.EventData;

import { HttpUtilService } from '../services/http-util-service';

@Injectable()
export class DataService {

  private path = 'api/events';

	constructor(private http: Http, private httpUtil: HttpUtilService) {
	}

  getEvents(dataDia: DayPilot.Date): Observable<EventData[]> {
    return this.http.get(this.httpUtil.url(this.path + '/' + dataDia), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  getAllEvents(): Observable<EventData[]> {
		return this.http.get(this.httpUtil.url(this.path), this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  createEvent(params: CreateEventParams): Observable<BackendResult> {
    //se nao der certo criar um model agenda para passar via parametro
		//let params = JSON.stringify(agenda);

    	return this.http.post(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros); 
  }

  deleteEvent(id: number): Observable<BackendResult> {
        return this.http.delete(this.httpUtil.url(this.path + '/' + id), 
						this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

  moveEvent(params: MoveEventParams): Observable<BackendResult> {
    //se nao der certo criar um model agenda para passar via parametro
		//let params = JSON.stringify(agenda);

    	return this.http.put(this.httpUtil.url(this.path), params, 
    					this.httpUtil.headers())
      				.map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);  }
}

export interface CreateEventParams {
  id?: number;
  start: string;
  end: string;
  text: string;
}

export interface MoveEventParams {
  id: number;
  newStart: string;
  newEnd: string;
}

export interface BackendResult {
  id: number;
  result: string;
  message: string;
}

