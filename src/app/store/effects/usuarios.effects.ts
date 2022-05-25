import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../usuarios/service/usuario.service';

@Injectable()
export class UsuariosEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType('[Usuarios] Carga usuarios'),
    mergeMap(() => this.usuarioService.getUser()
      .pipe(
        map(user => ({ type: '[Usuarios] Cargar usuarios Success', payload: user })),
        catchError((error) => of({ type: '[Usuarios] Cargar usuarios Fail', payload: error }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}
}

