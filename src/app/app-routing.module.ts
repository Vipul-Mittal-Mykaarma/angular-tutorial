import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponentComponent } from './components/directive-component/directive-component.component';
import { ParentComponent } from './components/parent/parent.component';
import { RoutingComponentComponent } from './components/routing-component/routing-component.component';
import { BasicGuardGuard } from './guard/basic-guard.guard';
import { BasicResolveResolver } from './resolver/basic-resolve.resolver';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './components/reactive-form2/reactive-form2.component';
import { PipeComponentComponent } from './components/pipe-component/pipe-component.component';

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
  },
  {
    path:'form/template', component: TemplateDrivenFormComponent  
  },
  {
    path:'form/reactive', component: ReactiveFormComponent  
  },
  {
    path:'form/reactive2', component: ReactiveForm2Component  
  },
  {
    path:'pipe', component: PipeComponentComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
