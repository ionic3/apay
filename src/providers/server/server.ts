import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import *  as MyConfig from '../../providers/myConfig';

@Injectable()
export class ServerProvider {

  constructor(public http: Http) {
    console.log('Hello SettingServerProvider Provider');
  }
  	ChangePassword(user_code:string,password: string,password_new: string){

  		let body = {user_code: user_code, password: password, password_new : password_new};
		return this.http.post(MyConfig.data.url+'/api/changepassword',body)
		.do(this.logResponse)
		.map(this.extractData)
		.catch(this.catchError)
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
