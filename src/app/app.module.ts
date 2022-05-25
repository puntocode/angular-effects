import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';

//NGRX
import { StoreModule } from '@ngrx/store';
import { effectsArr } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';

const devTool = {
  maxAge: 25,
  logOnly: environment.production,
  autoPause: true,
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsuariosModule,
    SharedModule,
    StoreModule.forRoot( ROOT_REDUCERS ),
    EffectsModule.forRoot(effectsArr),
    StoreDevtoolsModule.instrument(devTool),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
