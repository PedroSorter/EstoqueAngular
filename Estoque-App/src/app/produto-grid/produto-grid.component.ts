import { Component, OnInit, Inject } from '@angular/core';
import { WebserviceService } from 'src/app/services/webservice.service';
import { Produto } from '../Models/produto';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-produto-grid',
  templateUrl: './produto-grid.component.html',
  styleUrls: ['./produto-grid.component.scss']
})
export class ProdutoGridComponent implements OnInit {

  listaProdutos = new Array<Produto>();

  constructor(private http: WebserviceService, private dialog: MatDialog)
   {
      this.CarregarProdutos();
   }

   Deletar(produto): void {
    const dialogRef = this.dialog.open(DeletarProdutoDialog, {
      width: '250px',
      data: {id: produto.Id, nome: produto.Nome}
    });

    dialogRef.afterClosed().subscribe(result => {
        this.CarregarProdutos();
    });
  }

   CarregarProdutos(){
    this.http.GetProdutos().subscribe((data: any) => {
      this.listaProdutos = data.map((produto) => produto);
    })
   }

  ngOnInit() {
  }
}

@Component({
  selector: 'produto-grid-dialog',
  templateUrl: 'produto-grid-dialog.html',
})
export class DeletarProdutoDialog {
  constructor(
    public dialogRef: MatDialogRef<DeletarProdutoDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private http: WebserviceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  DeletarProduto(id) {
    this.http.DeleteProduto(id).subscribe((data: any) => {
      this.dialogRef.close();
    })
  }
}