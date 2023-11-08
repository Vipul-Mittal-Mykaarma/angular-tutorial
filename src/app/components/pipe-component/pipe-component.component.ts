import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent {

  search : string = "";
  teamMembers : Array<string>=[
    "Vipul",
    "Aseem",
    "Satish",
    "Anubhav",
    "Saurabh",
    "Arjun"
  ]
}
