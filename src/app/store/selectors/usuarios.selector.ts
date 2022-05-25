import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { UsuariosState } from '../interfaces/user.state';

export const selectUserFeature = (state: AppState) => state.users;

export const selectUsuarios = createSelector(
  selectUserFeature,
  (state: UsuariosState) => state.users
);

export const selectLoading = createSelector(
  selectUserFeature,
  (state: UsuariosState) => state.loading
)
