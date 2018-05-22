import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Http, Request, RequestOptions, RequestOptionsArgs, Response, ConnectionBackend, Headers } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Injectable()
export class InterceptorService extends Http {

  status = {
    "status.400": "错误的请求。由于语法错误，该请求无法完成。",
    "status.401": "未经授权。服务器拒绝响应。",
    "status.403": "已禁止。服务器拒绝响应。",
    "status.404": "未找到。无法找到请求的位置。",
    "status.405": "方法不被允许。使用该位置不支持的请求方法进行了请求。",
    "status.406": "不可接受。服务器只生成客户端不接受的响应。",
    "status.407": "需要代理身份验证。客户端必须先使用代理对自身进行身份验证。",
    "status.408": "请求超时。等待请求的服务器超时。",
    "status.409": "冲突。由于请求中的冲突，无法完成该请求。",
    "status.410": "过期。请求页不再可用。",
    "status.411": "长度必需。未定义“内容长度”。",
    "status.412": "前提条件不满足。请求中给定的前提条件由服务器评估为 false。",
    "status.413": "请求实体太大。服务器不会接受请求，因为请求实体太大。",
    "status.414": "请求 URI 太长。服务器不会接受该请求，因为 URL 太长。",
    "status.415": "不支持的媒体类型。服务器不会接受该请求，因为媒体类型不受支持。",
    "status.416": "HTTP 状态代码 {0}",
    "status.500": "内部服务器错误。",
    "status.501": "未实现。服务器不识别该请求方法，或者服务器没有能力完成请求。",
    "status.503": "服务不可用。服务器当前不可用(过载或故障)。"
  };
  constructor(public _backend: ConnectionBackend, public _defaultOptions: RequestOptions) {
    super(_backend, _defaultOptions);
  }
  /**
     * 执行任何类型的http请求。
     * 第一个参数是必需的，可以是一个url或一个{@link Request}实例。
     * 如果第一个参数是url，可选的{@link RequestOptions}对象可以作为第二个参数提供。
     * options对象将与值合并执行请求前的{@link BaseRequestOptions}
     * @param url 请求地址
     * @param options 请求参数
     */
  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    typeof url == 'string' ? (url = url) : (url.url = url.url);
    return this.intercept(super.request(url, options));
  }
  /**
   * 使用 'get' http方法执行一个请求
   * @param url 请求地址
   * @param options 请求参数
   */
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.get(url, options));
  }
  /**
   * 使用 'post' http方法执行一个请求
   * @param url 请求地址
   * @param options 请求参数
   */
  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.post(url, body, this.getRequestOptionArgs(options)));
  }
  /**
   * 使用 'put' http方法执行一个请求
   * @param url 请求地址
   * @param options 请求参数
   */
  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, body, this.getRequestOptionArgs(options)));
  }
  /**
   * 使用 'delete' http方法执行一个请求
   * @param url 请求地址
   * @param options 请求参数
   */
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.put(url, this.getRequestOptionArgs(options)));
  }
  /**
   * 获取请求参数，并设置请求头 headers 文本类型为json格式
   * @param options 请求参数
   */
  getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    options.headers.append('Content-Type', 'application/json');
    return options;
  }
  /**
   * 处理请求异常，并输出返回
   * @param observble http请求
   */
  intercept(observble: Observable<Response>): Observable<Response> {
    return observble
      .catch((err, source) => {
        console.log('catch');
        if (err.status < 200 || err.status >= 300) {
          console.log('网络错误' + err.status);
          return Observable.empty();
        }
        else {
          return Observable.throw(err);
        }
      })
      .finally(() => {
        console.log("finally");
      });
  }

}
