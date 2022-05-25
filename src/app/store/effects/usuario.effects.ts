import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, filter, switchMap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../usuarios/service/usuario.service';

@Injectable()
export class UsuarioEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType('[Usuario] Carga usuario'),
    switchMap((payload:any) => String(payload.id) ),
    mergeMap(id => this.usuarioService.getUserById(id)
      .pipe(
        map(user => ({ type: '[Usuario] Cargar usuario Success', payload: user })),
        catchError((error) => of({ type: '[Usuario] Cargar usuario Fail', payload: error }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}
}

