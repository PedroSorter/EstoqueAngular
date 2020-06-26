import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';
import { Produto } from '../Models/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {
  id;
  produto = new Produto;

  constructor(private route: ActivatedRoute, private http: WebserviceService, private router: Router)
  {
    this.route.params.subscribe(res => {
      this.id = res.id;
    })
  }

  ngOnInit() {
    this.http.GetProdutoId(this.id).subscribe((data: any) => {
      this.produto = data;     
    });
  }

  EditarProduto() {
    this.http.PutProduto(this.produto).subscribe((data: any) => {
      if(data.status == 200){
        this.router.navigate(["home"])
      }
    })
  }
}
