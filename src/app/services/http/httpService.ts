export interface HttpService {

    get(url:string):Promise<any>;
    put(url:string, body?:any):Promise<any>;
    post(url:string, body?:any):Promise<any>;
    delete(url:string):Promise<any>;
}