import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaPageComponent } from './prueba-page/prueba-page.component';
// import { ListarComponent } from './listar/listar.component';
// import { AddComponent } from './add/add.component';
// import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'',component:PruebaPageComponent},
  // {path:'list',component:ListarComponent}
  // {path:'add',component:AddComponent},
  // {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule { }
