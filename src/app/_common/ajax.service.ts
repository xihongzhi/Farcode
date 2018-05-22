import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { EncryptService } from './encrypt.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AjaxService {

  constructor(
    private _http: Http,
    private _encry: EncryptService
  ) { }

  public CorePost(url: string, request: any,path:any=1): Observable<any> {
    let urlPath:string;
    if (path==1){
      urlPath="http://47.104.8.128:8081/";
    }
    else{
      urlPath="http://47.104.8.128:8082/";
    }
    return this._http.post(urlPath+url,JSON.stringify(request)).map(
      response => {
        return response.json();
      }
    );
  }
  
  public CoreGet(url: string,path:any=1): Observable<any> {
    let urlPath:string;
    if (path==1){
      urlPath="http://47.104.8.128:8081/";
    }
    else{
      urlPath="http://47.104.8.128:8082/";
    }
    return this._http.get(urlPath+url).map(
      response => {
        return response.json();
      }
    );
  }
  public CorePost1(url: string, request: any,path:any=1): Observable<any> {
    let urlPath:string;
    if (path==1){
      urlPath="http://47.104.8.128:8081/";
    }
    else{
      urlPath="http://47.104.8.128:8082/";
    }
    return this._http.post(urlPath+url,request).map(
      response => {
        return response.json();
      }
    );
  }
}
