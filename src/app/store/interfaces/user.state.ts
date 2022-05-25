import { Usuario } from "src/app/usuarios/models/Usuario.model";

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}


export interface UsuarioState {
  data: Usuario | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}
