import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent implements OnInit{
  
  bool: boolean = true;

  firstInput: string ='';
  secondInput: string ='';

  placeholder : string=' hello ';
  ngOnInit() {
  }


}
