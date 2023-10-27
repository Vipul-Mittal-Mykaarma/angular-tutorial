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
import { FormsModule } from '@angular/forms';
import { TwoInputDirectiveDirective } from './directive/two-input-directive.directive';
import { MkIf2Directive } from './directive/mk-if-2.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponentComponent,
    ChildComponent,
    ParentComponent,
    MkIfDirective,
    TwoInputDirectiveDirective,
    MkIf2Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
