import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoGridComponent, DeletarProdutoDialog } from './produto-grid/produto-grid.component';
import { ProdutoComponent } from './produto/produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoSearchComponent } from './produto-search/produto-search.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ProdutoNovoComponent } from './produto-novo/produto-novo.component';

const appRoutes: Routes = [
  { path: 'home', component: ProdutoComponent },
  { path: 'detalhes/:id', component: ProdutoDetalheComponent},
  { path: 'novo-produto', component: ProdutoNovoComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoGridComponent,
    ProdutoComponent,
    ProdutoSearchComponent,
    ProdutoDetalheComponent,
    DeletarProdutoDialog,
    ProdutoNovoComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    NoopAnimationsModule 
  ],
  entryComponents: [DeletarProdutoDialog],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
