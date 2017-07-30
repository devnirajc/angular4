import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app new work';
    obj = {
        id: '1',
        name: 'niraj'
    }
    arr = ['niraj' , 'chetan' , 'dilip'];
    isTrue = false;
    myname = 'niraj';

    items = ['angular4', 'react', 'backbonejs' ];
    newItem = '';
    pushItem = function() {
        if (this.newItem !== '') {
            this.items.push(this.newItem);
            this.newItem = '';
        }
    }
    removeItem = function(index){
        this.items.splice(index , 1);
    }

    name = "Niraj";
    arr1 = [5, 2, 3, 8, 9];

    onSubmit = function(user){
        console.log(user);
    }
    // form;
    // ngOnInit(){
    //     this.form = new FormGroup({
    //         firstname: new FormControl("Niraj"),
    //         lastname: new FormControl(""),
    //         languages: new FormControl("")
    //     });
    // } 

    form;
    ngOnInit(){
        this.form = new FormGroup({
            decimal: new FormControl("", Validators.compose([
                Validators.required,
                Validators.minLength(3)
            ])),
            hexa: new FormControl(""),
            binary: new FormControl(""),
            octal: new FormControl("")
        });
    }
    decimalChanged = function(oldvalue, newvalue){
        if(newvalue != ""){
            this.form.patchValue({binary: parseInt(newvalue, 10).toString(2)});  
            this.form.patchValue({octal: parseInt(newvalue, 10).toString(8)});
            this.form.patchValue({hexa: parseInt(newvalue, 10).toString(16)});        
        } else{
            this.form.patchValue({binary: ""});
            this.form.patchValue({octal: ""});
            this.form.patchValue({hexa: ""});
        }
    }

    b = 0;
    o = 0;
    h = 0;
    binaryChanged = function(oldvalue, newvalue) {
        this.b = this.b + 1;
        if(this.b == 1) {
            if(newvalue != ""){
            this.form.patchValue({decimal: parseInt(newvalue, 2).toString(10)});       
            } else {
                this.form.patchValue({decimal: ""});
            }
            this.b = 0;
        }
    }
    octalChanged = function(oldvalue, newvalue) {
        this.o = this.o + 1;
        if(this.o == 1) {
            if(newvalue != ""){
            this.form.patchValue({decimal: parseInt(newvalue, 8).toString(10)});       
            } else {
                this.form.patchValue({decimal: ""});
            }
            this.b = 0;
        }
    }
    hexaChanged = function(oldvalue, newvalue) {
        this.h = this.h + 1;
        if(this.h == 1) {
            if(newvalue != ""){
            this.form.patchValue({decimal: parseInt(newvalue, 16).toString(10)});       
            } else {
                this.form.patchValue({decimal: ""});
            }
            this.b = 0;
        }
    }
}