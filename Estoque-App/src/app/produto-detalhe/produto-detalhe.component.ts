import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from '../services/webservice.service';
import { Produto } from '../Models/produto';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.scss']
})
export class ProdutoDetalheComponent implements OnInit {
  id;
  produtoForm = new FormGroup({
    Id: new FormControl(''),
    Nome: new FormControl(''),
    Quantidade: new FormControl(''),
    Valor: new FormControl('')
  });
  
  produto = new Produto;

  constructor(private route: ActivatedRoute, private http: WebserviceService)
  {
    this.route.params.subscribe(res => {
      this.id = res.id;
    })
  }

  ngOnInit() {
    this.http.GetProdutoId(this.id).subscribe((data: any) => {
      this.produto = data;
      this.produtoForm.patchValue({
        Id: data.id,
        Nome: data.nome,
        Quantidade: data.quantidade,
        Valor: data.valor
      });
    });
  }

  EditarProduto() {
    this.produto = this.produtoForm.value;
    this.http.PutProduto(this.produto).subscribe((data: any) => {

    })
  }
}
