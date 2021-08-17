import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "menu/add", component: AddComponent},
  {path: "menu/display/:name", component: DisplayComponent},
  {path: "menu/edit/:name", component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
