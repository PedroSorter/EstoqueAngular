import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { WebserviceService } from '../services/webservice.service';
import { Produto } from '../Models/produto';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produto-novo',
  templateUrl: './produto-novo.component.html',
  styleUrls: ['./produto-novo.component.scss']
})
export class ProdutoNovoComponent implements OnInit {

  produtoForm = new FormGroup({
    Nome: new FormControl(''),
    Quantidade: new FormControl(''),
    Valor: new FormControl('')
  });

  produto: Produto;

  constructor(private http: WebserviceService, private router: Router) { }

  ngOnInit() {
  }

  SalvarProduto() {
    this.produto = this.produtoForm.value;
    this.http.PostProduto(this.produto).subscribe((data: any) => {
      if(data.status == 200){
        this.router.navigate(["home"])
      }
    })
  }
}
