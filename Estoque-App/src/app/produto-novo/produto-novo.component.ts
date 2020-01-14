import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { WebserviceService } from '../services/webservice.service';
import { Produto } from '../Models/produto';

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent implements OnInit {

  produtoForm = new FormGroup({
    Id: new FormControl(''),
    Nome: new FormControl(''),
    Quantidade: new FormControl(''),
    Valor: new FormControl('')
  });

  produto: Produto;

  constructor(private http: WebserviceService) { }

  ngOnInit() {
  }

  SalvarProduto() {
    this.produto = this.produtoForm.value;
    this.produto.Id = 'b7a5374b-9d41-5cf5-b778-73ed6ee12596';
    this.http.CriarProduto(this.produto).subscribe((data: any) => {

    })
  }
}
