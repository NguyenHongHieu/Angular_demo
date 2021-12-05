import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './component/demo/demo.component';
import { InitComponent } from './component/init/init.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'init', component: InitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
