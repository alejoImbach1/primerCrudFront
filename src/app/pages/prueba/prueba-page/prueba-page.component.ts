import { Component, OnInit } from '@angular/core';
import { CrudModel } from '@models/crud.model';
import { CrudService } from '@services/crud.service';

@Component({
  selector: 'app-prueba-page',
  templateUrl: './prueba-page.component.html',
  styleUrls: ['./prueba-page.component.scss']
})
export class PruebaPageComponent implements OnInit{
  protected modalAddShown = false;
  protected modalEditShown = false;

  crud: CrudModel = null;
  cruds: CrudModel[] = [];

  constructor(private _crudService: CrudService){}
  
  ngOnInit(): void {
    this.getCrud();
  }

  getCrud(){
    this._crudService.bringCrud().subscribe(
      (cruds:CrudModel[])=>{
        this.cruds = cruds;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  showModalEdit(crud: CrudModel){
    this.crud = crud;
    this.modalEditShown = true
  }

  showModalAdd(){
    this.crud = null
    this.modalAddShown = true
  }

  addCrud(crud:CrudModel){
    this.showModalAdd()
    this._crudService.createCrud(crud).subscribe(crud => {
      this.getCrud();
      this.reset();
    })
  }

  actualizarCrud(crud:CrudModel){
    this.showModalEdit(crud);
    this._crudService.updateCrud(crud).subscribe(crud => {
      this.getCrud();
      this.reset();
    });
  }
  reset(){
    this.modalEditShown = false
    this.modalAddShown = false
    this.crud = null
  }


  eliminarCrud(crudId: number) {
    this._crudService.deleteCrud(crudId).subscribe(() => {
      this.getCrud();
    })
  }
}
