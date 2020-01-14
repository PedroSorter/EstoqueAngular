import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoGridComponent } from './produto-grid/produto-grid.component';
import { ProdutoComponent } from './produto/produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoSearchComponent } from './produto-search/produto-search.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const appRoutes: Routes = [
  { path: 'home', component: ProdutoComponent },
  { path: 'detalhes/:id', component: ProdutoDetalheComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoGridComponent,
    ProdutoComponent,
    ProdutoSearchComponent,
    ProdutoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ) 
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
