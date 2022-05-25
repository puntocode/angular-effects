import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario.model';


import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as usuariosActions from '../../store/actions';
import { selectLoading, selectUsuarios } from '../../store/selectors/usuarios.selector';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios:Usuario[] = [];
  loading:boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.initStore();
  }


  initStore(){
    this.store.dispatch(usuariosActions.CARGAR_USUARIOS());

    this.store.select(selectLoading)
      .subscribe(resp => this.loading = resp)

    this.store.select(selectUsuarios)
      .subscribe(resp => this.usuarios = resp)
  }

}
