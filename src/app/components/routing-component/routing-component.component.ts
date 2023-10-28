import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-routing-component',
  templateUrl: './routing-component.component.html',
  styleUrls: ['./routing-component.component.css']
})
export class RoutingComponentComponent {

  idRecived: any;
  idRecived1: any;
  dataByResolver:any;
  constructor(private router:Router, private route : ActivatedRoute){

  }

  ngOnInit(){
    this.idRecived = this.route.snapshot.params['id'];
    this.route.params.subscribe(params => {
      this.idRecived1 = params['id'];
    });

    this.route.data.subscribe(data =>{
      this.dataByResolver = data['server'];
    })
  }

  navigate(){
    this.router.navigate(['parent']);
  }

}
