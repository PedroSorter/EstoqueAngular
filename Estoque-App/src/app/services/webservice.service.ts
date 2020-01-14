import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url:string = 'https://localhost:44364/api/produto';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) {} 

   public GetProdutos() {
      let urlinit = `${url}/GetProdutos`;  
      return this.http.get(urlinit);
    }
 
    public GetProdutoId(id) {
      let urlinit = `${url}/GetProduto/${id}`;
      return this.http.get(urlinit);
 }
}
