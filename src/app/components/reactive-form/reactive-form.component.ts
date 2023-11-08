import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, UntypedFormControl, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  

  form : FormGroup = new FormGroup({
      'email' : new UntypedFormControl("", [Validators.email]),
      'name' : new FormControl(""),
      'number' : new FormControl("", [this.validateNumber]),
      'hobbies' : new FormArray([])
    }
  );
  

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
    return <FormArray>this.form.get('hobbies');
  }

  addHobby(){
    this.getHobbies().push(new FormGroup({
      name : new FormControl(),
      age : new FormControl()
    }));
  }
  formSubmit(){
    console.log(this.form.value);
    console.log(this.form.controls['number'].errors);
  }
}
