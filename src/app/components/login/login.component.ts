import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users-service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Variables.
  usersList: any [] = []
  //banderaSession : boolean = false
  errorMessage: string = '';

  loginForm: FormGroup

  //Constructor trae los usuarios y la librería Router para poder dirigirse a otro elemento.
  constructor(private userService:UsersService, private router:Router) {
    this.usersList = userService.getAllUsers();
  }

  ngOnInit(): void {
    //Validaciones del formulario Login.
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitLogin() {
    //Si las validaciones del formulario no son correctas, se muestra mensaje error.
    if (this.loginForm.valid) {
      //Si la el usuario y contraseña existen/coinciden se ingresa a la aplicación.
      if(this.correctLogin(this.loginForm.value.username, this.loginForm.value.password)){
        //this.banderaSession = true;
        //Trae sólo el usuario logueado para poder exportarlo a otros componentes.
        this.userService.userLog = this.userService.getOneUser(this.loginForm.value.username)
        this.router.navigate(['/home'])
      }
    } else {
      //this.banderaSession = false;
      this.errorMessage = "El campo Username y Password son OBLIGATORIOS."
    }
  }

  //Función que válida si el usuario y contraseña es válido.
  private correctLogin(user:string, pass:string){
    let banderaUser: boolean = false
    let banderaPass: boolean = false
    let banderaSess: boolean = false

    this.usersList.forEach(element => {
      if(user == element.username){
        banderaUser = true
      }
      if(pass == element.password){
        banderaPass = true
      }
    });

    //Si algunas de las dos banderas es False, se muestra mensaje de error.
    if(banderaUser == false || banderaPass == false){
      this.errorMessage = "El usuario o contraseña es incorrecta."
    }else{
      banderaSess = true
    }
    //Si coinciden y devuelve True ingresa al Home.
    return banderaSess
  }

  get controles(){
    return this.loginForm.controls;
  }
}

/* export interface User {
  idUser:number;
  username: string;
  password: string;
  surname: string;
  name: string;
  mail: string;
  operador: string;
  rol: string;
} */