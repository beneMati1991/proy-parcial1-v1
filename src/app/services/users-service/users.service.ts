import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  allUsers: any = {}

  constructor() { }

  getAllUsers(){
    return this.allUsers = userDetails.slice(0);
  }

  getOneUser(user: string){
    return userDetails.slice(0).find(User => User.username == user);
    //Parametros de entrada de la función => cuerpo de la función.
  }

  userLog: User
}

const userDetails = [
  {"idUser":1, "username":"superadmin", "password": "Azerty?.123", "surname": "ap" , "name": "no", "mail": "a@gmail.com", "operador": "", "rol": "Administrador"},
  {"idUser":2, "username":"user1", "password": "Mb*123", "surname": "Benedetto" , "name": "Matias", "mail": "benedettomatias@gmail.com", "operador": "", "rol": "Usuario"}
]