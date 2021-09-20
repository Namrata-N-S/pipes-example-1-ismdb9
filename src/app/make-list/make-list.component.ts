import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.css'],
})
export class MakeListComponent implements OnInit, OnChanges, DoCheck {
  constructor() {
    console.log('constructor');
  }
  newItem: String;
  addItem = [];
  strike: String = 'strike';
  red: Boolean = true;
  @Input() myName;
  @Input() myObj;
  @Output() newItemAdded = new EventEmitter<String>();

  ngOnChanges(obj: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(obj);
  }
  ngOnInit() {
    console.log('ngonint');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }
  makeList = function (itemToAdd: String) {
    this.newItem = itemToAdd;
    this.addItem.push(this.newItem);
    this.newItem = '';
    this.newItemAdded.emit(itemToAdd);
  };

  delete = function (addedItem) {
    // this.addItem.splice(index, 1); // to remove the deleted item from array
  };

  isRed = function () {
    this.red = !this.red;
  };
}
