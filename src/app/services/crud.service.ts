import { Injectable } from '@angular/core';
import { CoreService } from './core.service';
import { Observable } from 'rxjs';
import { CrudModel } from '@models/crud.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private _coreService:CoreService
  ) { }

  public bringCrud():Observable<CrudModel[]>{
    return this._coreService.get<CrudModel[]>('cruds');
  }

  createCrud(crud: CrudModel) {
    crud.descripcion = crud.descripcion;
    crud.fecha = crud.fecha;
    return this._coreService.post<CrudModel>('cruds', crud);
  }

  updateCrud(crud: CrudModel) {
    crud.descripcion = crud.descripcion;
    crud.fecha = crud.fecha;
    return this._coreService.put('cruds/' + crud.id, crud);
  }


  deleteCrud(crudId: number) {
    return this._coreService.delete('cruds/' + crudId);
  }

  // actualizarTipo_transaccion(tipo_transaccion: TipoTransaccionModel) {
  //   tipo_transaccion.detalle = tipo_transaccion.detalle.toUpperCase();
  //   tipo_transaccion.descripcion = tipo_transaccion.descripcion.toUpperCase();
  //   return this._coreService.put('tipo_transacciones/' + tipo_transaccion.id, tipo_transaccion);
  // }
}
