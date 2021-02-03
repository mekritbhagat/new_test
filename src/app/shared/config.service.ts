import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './app.model';
import { tap } from 'rxjs/operators';

let _config: Config;

@Injectable({ providedIn: 'root' })
export class ConfigService {

    baseUrl: string = "http://localhost:3000/";

    constructor(private http: HttpClient) { }


    getAllProducts() {
        return this.http.get<ProductModel[]>(this.baseUrl + 'Products');
    }

    getProductById(id: string) {
        return this.http.get<ProductModel>(this.baseUrl + 'Products' + '/' + id);
    }

    addProduct(product: ProductModel) {
        return this.http.post(this.baseUrl + 'Products', product);
    }

    deleteProduct(id: string) {
        return this.http.delete(this.baseUrl + 'Products' + '/' + id);
    }

    updateProduct(product: ProductModel) {
        return this.http.put(this.baseUrl + 'Products' + '/' + product._id, product);
    }

    loadConfig(): Promise<Config> {
        return this.http
            .get<Config>(`assets/config.json`)
            .pipe(
                tap(config => {
                    _config = config;
                })
            )
            .toPromise();
    }

    get config() {
        return _config;
    }
}
