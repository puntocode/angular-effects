import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions';
import { Usuario } from '../models/Usuario.model';
import { selectUsuario } from '../../store/selectors/usuario.selector';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  user!:Usuario | null;

  constructor(private router:ActivatedRoute,
              private store:Store<AppState>) { }

  ngOnInit(): void {
    this.initStore();
  }

  initStore(){
    this.router.params
      .subscribe(params => {
        const id = params['id'];
        this.store.dispatch(usuariosActions.CARGAR_USUARIO({id}));
      })

    this.store.select(selectUsuario)
      .subscribe(usuario => this.user = usuario )
  }

}
