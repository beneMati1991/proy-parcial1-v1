import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})


export class UsersService {
  allUsers: any = {}

  constructor() { }

  //Se obtiene todos los usuarios declarados en la constante "userDetails".
  getAllUsers(){
    return this.allUsers = userDetails.slice(0);
  }

  //Se obtiene el usuario en base al nombre de "username".
  getOneUser(user: string){
    return userDetails.slice(0).find(User => User.username == user);
  }

  //Variable con estructura de "User", utilizada para informar el usuario logueado entre los diferentes componentes.
  userLog: User
}


const userDetails = [
  {
    "idUser":1, 
    "username":"superadmin", 
    "password": "Azerty?.123", 
    "name": "no", 
    "surname": "ap" , 
    "mail": "a@gmail.com", 
    "operador": "", 
    "rol": "Administrador"
  },
  {
    "idUser":2, 
    "username":"user1", 
    "password": "Mb*123",  
    "name": "Matias",
    "surname": "Benedetto" , 
    "mail": "benedettomatias@gmail.com", 
    "operador": "", 
    "rol": "Usuario"
  }
]