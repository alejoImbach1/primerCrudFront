import { Component,Input,Output,EventEmitter} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CrudModel } from '@models/crud.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  @Input() crud:CrudModel;
  @Output() data: EventEmitter<CrudModel> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  formCrud: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder){
    this.crud = {
      id: null,
      descripcion: '',
      fecha: ''

    };
    this.buildForm();
  }
  
  closeModal(){
    this.cancel.emit();
  }

  private buildForm() {
    this.formCrud = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      fecha: '',
    });
  }

  get descripcionField() {
    return this.formCrud.get('descripcion');
  }

  get fechaField() {
    return this.formCrud.get('fecha');
  }


  private getControl(name: string) {
    return this.formCrud.controls[name];
  }

  guardarCrud(){
    this.data.emit(this.getCrud())
  }

  getCrud(): CrudModel {
    return {
      // id: this.crud?.id,
      descripcion: this.getControl('descripcion').value,
      fecha: this.getControl('fecha')?.value
    }
  }

}
