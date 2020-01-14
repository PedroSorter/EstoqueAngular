import { Component, OnInit } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-produto-grid',
  templateUrl: './produto-grid.component.html',
  styleUrls: ['./produto-grid.component.scss']
})
export class ProdutoGridComponent implements OnInit {

  listaProdutos;

  constructor(private http: WebserviceService)
   {
      this.http.GetProdutos().subscribe((data: any) => {
        this.listaProdutos = data;
      })
   }

  ngOnInit() {
  }
}
