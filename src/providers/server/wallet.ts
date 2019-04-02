import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import *  as MyConfig from '../../providers/myConfig';

@Injectable()
export class WalletProvider {

	constructor(public http: Http) {
		console.log('Hello SettingServerProvider Provider');
	}
  	
	private catchError(error : Response){
		console.log(error);
		return Observable.throw(error.json().error || "server login error");
	}

	private logResponse(res : Response){
		console.log(res);
	}

	private extractData(res : Response){
		
		return res.json();
	}
}
