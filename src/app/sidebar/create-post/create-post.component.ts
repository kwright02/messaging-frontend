import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Group {
  name: string;
}

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  groupCtl = new FormControl();
  filteredFruits: Observable<string[]>;
  testGroup: string[] = ['Lemon'];
  allGroups: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredFruits = this.groupCtl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allGroups.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.testGroup.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.groupCtl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.testGroup.indexOf(fruit);

    if (index >= 0) {
      this.testGroup.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.testGroup.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.groupCtl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allGroups.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}

