import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { JSEncrypt } from 'jsencrypt';
import { environment } from "../../environments/environment";
//import { RequestBase, RequestEncryptionModel } from "../_dto/Request/RequestBase";

@Injectable()
export class EncryptService {

  constructor() { }

  /**
   * 获取时间戳
   */
  public GetTimesTamp(): number {
    let date: Date = new Date();
    let timesTamp: number = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return timesTamp;
  }
}
