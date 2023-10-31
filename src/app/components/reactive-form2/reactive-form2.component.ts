import { Component } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form2',
  templateUrl: './reactive-form2.component.html',
  styleUrls: ['./reactive-form2.component.css']
})
export class ReactiveForm2Component {

  form : FormGroup;

constructor(private fb:FormBuilder){
  this.form= this.fb.group({
    'email' : ["", [Validators.email]],
    'name' : "",
    'number' :["", [this.validateNumber]] ,
    'hobbies' : this.fb.array([])
  });
}

validateNumber(control: AbstractControl) {
  if (control.value.includes('a')) {
    console.log("REACHED HERE ")
    return { invalidNumber: true };
  }
  return null;
}

ngOnInit(){
}

getHobbies(){
  return this.form.get('hobbies') as FormArray;
}

addHobby(){
  this.getHobbies().push(
    this.fb.group({
      name : "",
      age : ""
    }));
}
formSubmit(){
  console.log(this.form.controls['number'].errors);
}
}
