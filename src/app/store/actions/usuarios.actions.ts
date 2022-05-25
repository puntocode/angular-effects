import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../usuarios/models/Usuario.model';

export const CARGAR_USUARIOS = createAction(
  '[Usuarios] Carga usuarios'
);

export const CARGAR_USUARIOS_FAIL = createAction(
  '[Usuarios] Cargar usuarios Fail',
  props<{ payload: any }>()
);

export const CARGAR_USUARIOS_SUCCESS = createAction(
  '[Usuarios] Cargar usuarios Success',
  props<{ payload: Usuario[] }>()
);


//export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
