import { createReducer, on } from "@ngrx/store";
import * as fromUsuario from '../actions'
import { UsuarioState } from '../interfaces/user.state';


const estadoInicial: UsuarioState = {
  data: null,
  loaded: false,
  loading: false,
  error: null
};


export const userReducer = createReducer(
  estadoInicial,
  on(fromUsuario.CARGAR_USUARIO, (state) => {
    return {...state, loading: true, error: null};
  }),

  on(fromUsuario.CARGAR_USUARIO_SUCCESS, (state, {payload}) => {
    return {
      ...state,
      loading: false,
      loaded: true,
      data: {...payload}
    }
  }),

  on(fromUsuario.CARGAR_USUARIO_FAIL, (state, {payload}) => {
    return {
      ...state,
      loaded: false,
      loading: false,
      error: {
        status: payload.status,
        message: payload.message,
        url: payload.url
      }
    }
  })
);
