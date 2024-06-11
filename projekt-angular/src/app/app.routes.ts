import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { WyswietlStringaComponent } from './wyswietl-stringa/wyswietl-stringa.component';
import { DrugieZadanieComponent } from './drugie-zadanie/drugie-zadanie.component';

export const routes: Routes = [
  { path: '', component: WyswietlStringaComponent },
  {path: '',component:DrugieZadanieComponent}

];
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]



})
export class AppRoutingModule { }
