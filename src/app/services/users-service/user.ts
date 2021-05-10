//Estructura de "User" a ser utilizada por los componentes que la necesiten.
export interface User {
  idUser:number;
  username: string;
  password: string;
  name: string;
  surname: string;
  mail: string;
  operador: string;
  rol: string;
}