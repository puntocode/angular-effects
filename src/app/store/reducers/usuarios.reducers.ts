import { createReducer, on } from "@ngrx/store";
import * as fromUsuarios from '../actions'
import { UsuariosState } from '../interfaces/user.state';


const estadoInicial: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};


export const usersReducer = createReducer(
  estadoInicial,
  on(fromUsuarios.CARGAR_USUARIOS, (state) => {
    return {...state, loading: true};
  }),

  on(fromUsuarios.CARGAR_USUARIOS_SUCCESS, (state, {payload}) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      users: [...payload]
    }
  }),

  on(fromUsuarios.CARGAR_USUARIOS_FAIL, (state, {payload}) => {
    return {
      ...state,
      loaded: false,
      loading: false,
      error: payload.message
    }
  })
);
