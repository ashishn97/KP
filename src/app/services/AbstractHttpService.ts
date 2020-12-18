import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestResponse } from 'src/app/DTO/RequestResponse';
import { BaseDTO } from 'src/app/DTO/BaseDTO';

/**
 * @export
 * @abstract
 * @class AbstractHttpService
 * @template T
 */
@Injectable()
export abstract class AbstractHttpService<T extends BaseDTO> {
    abstract url: string;
    private httpOptions: object = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            authorization: 'Basic d2ViTWFzdGVyOndlYk1hc3Rlcg==',
        }),
    };

    constructor(private httpClient: HttpClient) {}

    post(item: T, url?: string, headers?: object): Promise<RequestResponse<T>> {
        const serviceUrl = url || this.url;
        return new Promise(async (resolve, reject) => {
            this.httpClient.post<T>(serviceUrl, item, headers ? headers : this.httpOptions).subscribe(
                (data) => {
                    return resolve(new RequestResponse(data));
                },
                (error) => {
                    return resolve(new RequestResponse(error));
                }
            );
        });
    }

    get(code: string, url?: string, headers?: object): Promise<RequestResponse<T>> {
        const serviceUrl = url || this.url;
        return new Promise(async (resolve, reject) => {
            this.httpClient.get<T>(serviceUrl + '?' + code, headers ? headers : {}).subscribe(
                (data) => {
                    return resolve(new RequestResponse(data));
                },
                (error) => {
                    return resolve(new RequestResponse(error));
                }
            );
        });
    }

    findAll(code: string, url?: string): Promise<RequestResponse<T>> {
        const serviceUrl = url || this.url;
        return new Promise(async (resolve, reject) => {
            this.httpClient.get<T>(serviceUrl + '/' + code).subscribe(
                (data) => {
                    return resolve(new RequestResponse(data));
                },
                (error) => {
                    return resolve(new RequestResponse(error));
                }
            );
        });
    }

    put(code: string, item: T, url?: string): Promise<RequestResponse<T>> {
        const serviceUrl = url || this.url;
        return new Promise(async (resolve, reject) => {
            return this.httpClient.put<T>(serviceUrl + '/' + code, item, this.httpOptions).subscribe(
                (data) => {
                    return resolve(new RequestResponse(data));
                },
                (error) => {
                    return resolve(new RequestResponse(error));
                }
            );
        });
    }

    delete(code: string, url?: string): Promise<RequestResponse<T>> {
        const serviceUrl = url || this.url;
        return new Promise(async (resolve, reject) => {
            this.httpClient.delete<T>(serviceUrl + '/' + code).subscribe(
                (data) => {
                    return resolve(new RequestResponse(data));
                },
                (error) => {
                    return resolve(new RequestResponse(error));
                }
            );
        });
    }

    getByFilter(code: string, filter: object, url?: string): Promise<RequestResponse<T>> {
        const serviceUrl = url || this.url;
        return new Promise(async (resolve, reject) => {
            this.httpClient.get<T>(serviceUrl + '/' + code, this.getParamFilter(filter)).subscribe(
                (data) => {
                    return resolve(new RequestResponse(data));
                },
                (error) => {
                    return resolve(new RequestResponse(error));
                }
            );
        });
    }

    private getParamFilter(filter) {
        return {
            params: filter,
        };
    }

    private buildBadRequestError(errorObject: any) {
        let errorMessageString = '';
        if (errorObject.type == 'STATIC_VALIDATION_FAILED') {
            for (let error of errorObject['invalidParams']) {
                errorMessageString = errorMessageString + error['reason'] + '<br/>';
            }
        } else if (errorObject.type == 'DATA_VALIDATION_FAILED') {
            errorMessageString = errorObject['message'];
        }
        errorObject.errorMessageString = errorMessageString;
        return errorObject;
    }
}
