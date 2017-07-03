import { Component } from '@angular/core';


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
}
