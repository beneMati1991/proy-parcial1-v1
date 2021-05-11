import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/services/users-service/user';
import { UsersService } from '../../services/users-service/users.service';

@Component({
  selector: 'app-client-account-component',
  templateUrl: './client-account.component.html',
  styleUrls: ['./client-account.component.css']
})
export class ClientAccountComponent implements OnInit {
  errorMessage: string = '';
  clienteForm: FormGroup
  dataUserLog: User
  eventUser: any = {
    idUser: 0,
    username: "",
    password: "",
    surname: "",
    name: "",
    mail: "",
    operador: "",
    rol: "",
  }
  roles: string[] = ['Administrador', 'Usuario'];

  constructor(private userSs:UsersService) {
      this.dataUserLog = this.userSs.userLog
   }

  ngOnInit(): void {
    this.clienteForm = new FormGroup({
      user: new FormControl(''),
      pass: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?.!@#$%^&*]).{4,}$')]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required,Validators.email]),
      operador: new FormControl(''),
      rol: new FormControl('', [Validators.required])
    });
    this.cargaForm()
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
      this.errorMessage = ""
      alert("Datos modificados")
    }else{
      this.errorMessage = "Formulario incorrecto."
    }
  }

  cargaForm(){
    this.eventUser.idUser = this.dataUserLog.idUser
    this.eventUser.username = this.dataUserLog.username
    this.eventUser.password = this.dataUserLog.password
    this.eventUser.name = this.dataUserLog.name
    this.eventUser.surname = this.dataUserLog.surname
    this.eventUser.mail = this.dataUserLog.mail
    this.eventUser.operador = this.dataUserLog.operador
    this.eventUser.rol = this.dataUserLog.rol
  }

  //dataAux = new AuxUser(this.eventUser)

}


/* class AuxUser{
  userAux: User
  constructor(us:User){
    this.userAux = us
  }
} */