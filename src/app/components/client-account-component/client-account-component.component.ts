import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/services/users-service/user';
import { UsersService } from '../../services/users-service/users.service';

@Component({
  selector: 'app-client-account-component',
  templateUrl: './client-account-component.component.html',
  styleUrls: ['./client-account-component.component.css']
})
export class ClientAccountComponentComponent implements OnInit {
  errorMessage: string = '';
  clienteForm: FormGroup
  dataUserLog: User

  constructor(private userSs:UsersService) {
    this.dataUserLog = userSs.userLog
   }

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{4,}$')]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,Validators.email]),
      operador: new FormControl(''),
      rol: new FormControl('', [Validators.required])
    });
  }

  get controles(){
    return this.clienteForm.controls;
  }

  submitModif(){
    if (this.clienteForm.valid) {
      this.dataUserLog.username = this.clienteForm.value.user
      this.dataUserLog.password = this.clienteForm.value.pass
      this.dataUserLog.name = this.clienteForm.value.name
      this.dataUserLog.surname = this.clienteForm.value.surname
      this.dataUserLog.mail = this.clienteForm.value.mail
      this.dataUserLog.operador = this.clienteForm.value.operador
      this.dataUserLog.rol = this.clienteForm.value.rol
      this.userSs.userLog = this.dataUserLog
      alert("Datos modificados")
    }else{
      console.log("Ver.")
    }
  }

}
