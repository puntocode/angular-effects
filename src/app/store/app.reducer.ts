import * as reducers from './reducers'
import { ActionReducerMap } from '@ngrx/store'
import { UsuariosState, UsuarioState } from './interfaces/user.state';


export interface AppState {
  users: UsuariosState;
  user: UsuarioState;
}


export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  users: reducers.usersReducer,
  user: reducers.userReducer,
}
