import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../usuarios/models/Usuario.model';

export const CARGAR_USUARIO = createAction(
  '[Usuario] Carga usuario',
  props<{ id: string }>()
);

export const CARGAR_USUARIO_FAIL = createAction(
  '[Usuario] Cargar usuario Fail',
  props<{ payload: any }>()
);

export const CARGAR_USUARIO_SUCCESS = createAction(
  '[Usuario] Cargar usuario Success',
  props<{ payload: Usuario }>()
);
