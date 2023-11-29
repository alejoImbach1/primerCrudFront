import { Component,Input,Output,EventEmitter} from '@angular/core';
import { CrudModel } from '@models/crud.model';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent{
  @Input() cruds: CrudModel[] = [];

  // @Output() update: EventEmitter<CrudModel> = new EventEmitter();
  // @Output() delete: EventEmitter<number> = new EventEmitter();
  @Output() refresh: EventEmitter<void> = new EventEmitter();
  @Output() update: EventEmitter<CrudModel> = new EventEmitter();
  @Output() create: EventEmitter<void> = new EventEmitter();
  @Output() delete: EventEmitter<number> = new EventEmitter();

  numReg = 5;
  currentPage = 0;

  constructor(){
    // this.cruds = [];
  }

  refrescar(){
    this.refresh.emit();
  }

  eliminar(idCrud:number){
    this.delete.emit(idCrud);
  }

  agregar(){
    this.create.emit();
  }

  actualizar(crud:CrudModel){
    this.update.emit(crud);
  }

}
