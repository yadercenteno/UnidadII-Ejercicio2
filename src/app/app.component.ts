import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Bienvenidos a la Validación de Formularios con Angular';
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    const regUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

    this.angForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(5)]],
      apellido: ['', Validators.required],
      edad: ['', [Validators.min(0), Validators.max(100)]],
      sitioWeb: ['', [Validators.pattern(regUrl)]]
    });

    this.angForm.controls['nombre'].valueChanges.subscribe(data => {
      console.log(data);
    });
  }

  onSubmit(): void {
    if (this.angForm.valid) {
      console.log(this.angForm.value);
    } else {
      alert('ERROR: El formulario es INVALIDO');
    }
  }
}
