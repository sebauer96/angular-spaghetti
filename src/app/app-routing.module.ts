import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';


const routes: Routes = [
  {
    path: 'example1',
    component: Example1Component
  },
  {
    path: 'example2',
    component: Example2Component
  },
  {
    path: 'example3',
    component: Example3Component
  },
  {
    path: '',
    component: Example1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
