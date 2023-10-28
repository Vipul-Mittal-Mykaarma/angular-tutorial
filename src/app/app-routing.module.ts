import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponentComponent } from './components/directive-component/directive-component.component';
import { ParentComponent } from './components/parent/parent.component';
import { RoutingComponentComponent } from './components/routing-component/routing-component.component';
import { BasicGuardGuard } from './guard/basic-guard.guard';
import { BasicResolveResolver } from './resolver/basic-resolve.resolver';

const routes: Routes = [
  {
    path:'directive', canActivate:[BasicGuardGuard] , component: DirectiveComponentComponent
  },
  {
    path:'parent' , canActivate:[BasicGuardGuard] , component: ParentComponent  
  },
  {
    path:'route/:id' , canActivate:[BasicGuardGuard], resolve:{
      server : BasicResolveResolver
    } , component: RoutingComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
