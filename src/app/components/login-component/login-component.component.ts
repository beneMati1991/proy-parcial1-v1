import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators,} from '@angular/forms';
import { UsersService } from '../../services/users-service/users.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  usersList: any [] = []
  banderaSession : boolean = false
  errorMessage: string = '';

  loginForm: FormGroup

  constructor(private userService:UsersService, private router:Router) {
    this.usersList = userService.getAllUsers();
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitLogin() {
    if (this.loginForm.valid) {
      if(this.correctLogin(this.loginForm.value.username, this.loginForm.value.password)){
        this.banderaSession = true;
        this.userService.userLog = this.userService.getOneUser(this.loginForm.value.username)
        //Traer sólo mi usuario para exportarlo a otro componente.
        this.router.navigate(['/home'])
      }
      //this.loginForm.reset();
    } else {
      this.banderaSession = false;
      this.errorMessage = "El campo Username y Password son OBLIGATORIOS"
    }
  }

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

    if(banderaUser == false || banderaPass == false){
      this.errorMessage = "El usuario o contraseña es incorrecta."
    }else{
      banderaSess = true
    }

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