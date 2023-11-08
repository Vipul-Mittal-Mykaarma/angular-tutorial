import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveComponentComponent } from './components/directive-component/directive-component.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { MkIfDirective } from './directive/mk-if.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { TwoInputDirectiveDirective } from './directive/two-input-directive.directive';
import { MkIf2Directive } from './directive/mk-if-2.directive';
import { RoutingComponentComponent } from './components/routing-component/routing-component.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveForm2Component } from './components/reactive-form2/reactive-form2.component';
import { PipeComponentComponent } from './components/pipe-component/pipe-component.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponentComponent,
    ChildComponent,
    ParentComponent,
    MkIfDirective,
    TwoInputDirectiveDirective,
    MkIf2Directive,
    RoutingComponentComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveForm2Component,
    PipeComponentComponent,
    SearchPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
