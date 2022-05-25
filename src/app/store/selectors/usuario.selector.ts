import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { UsuarioState } from '../interfaces/user.state';

export const selectUserFeature = (state: AppState) => state.user;

export const selectUsuario = createSelector(
  selectUserFeature,
  (state: UsuarioState) => state.data
);

export const selectLoading = createSelector(
  selectUserFeature,
  (state: UsuarioState) => state.loading
)
