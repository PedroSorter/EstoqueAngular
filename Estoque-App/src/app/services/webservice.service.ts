import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../Models/produto';

const url:string = 'https://localhost:44364/api/produto';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private http: HttpClient) {} 

   public GetProdutos() {
      let urlinit = `${url}/Produtos`;  
      return this.http.get<Produto>(urlinit);
    }
 
    public GetProdutoId(id) {
      let urlinit = `${url}/Produto/${id}`;
      return this.http.get<Produto>(urlinit);
    }

    public PutProduto(produto) {
        let urlinit = `${url}/Produto/`;
        return this.http.put(`${urlinit}`,produto ,{ 
          headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response' 
      })
    }

    public DeleteProduto(id){
      let urlinit = `${url}/Produto/${id}`;
      return this.http.delete(`${urlinit}`, { observe: 'response' })
    }

    public PostProduto(produto) {
      let urlinit = `${url}/Produto/`;
     return this.http.post(`${urlinit}`,produto ,{
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        observe: 'response' 
      })
    }
}
