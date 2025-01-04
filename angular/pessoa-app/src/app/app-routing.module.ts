import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [
  { path: 'pessoa', component: PessoaComponent }, // Rota para PessoaComponent
  { path: '', redirectTo: '/pessoa', pathMatch: 'full' }, // Rota padrão opcional
  { path: '**', redirectTo: '/pessoa' }, // Redirecionamento para rotas não existentes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
