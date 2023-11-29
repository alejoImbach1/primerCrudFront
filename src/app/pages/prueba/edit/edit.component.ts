import { Component,EventEmitter,Input,Output,OnInit} from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CrudModel } from '@models/crud.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
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

  ngOnInit(): void {
    this.setTexts()
  }

  closeModal(){
    this.cancel.emit();
  }

  private buildForm() {
    this.formCrud = this.formBuilder.group({
      id:[0],
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

  setTexts() {
    this.formCrud.patchValue({
      id: 'ID: '+this.crud.id,
      descripcion: this.crud.descripcion,
      fecha: this.crud.fecha
    })
  }

  private getControl(name: string) {
    return this.formCrud.controls[name];
  }

  guardarCrud(){
    this.data.emit(this.getCrud())
  }

  getCrud(): CrudModel {
    return {
      id: this.crud?.id,
      descripcion: this.getControl('descripcion').value,
      fecha: this.getControl('fecha')?.value
    }
  }
}
