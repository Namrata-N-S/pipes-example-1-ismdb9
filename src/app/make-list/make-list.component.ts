import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.css']
})
export class MakeListComponent implements OnInit {
  constructor() {}
  newItem: String;
  addItem = [];
  strike: String = 'strike';
  red: Boolean = true;
  ngOnInit() {}

  makeList = function(itemToAdd: String) {
    this.newItem = itemToAdd;
    this.addItem.push(this.newItem);
    this.newItem = '';
  };

  delete = function(addedItem) {
    // this.addItem.splice(index, 1); // to remove the deleted item from array
  };

  isRed = function() {
    this.red = !this.red;
  };
}
