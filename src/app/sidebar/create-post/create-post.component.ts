import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
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
  groupCtrl = new FormControl();
  filteredGroups: Observable<string[]>;
  groups: string[] = [];
  allGroups: string[] = ['All Students', '8th Grade', 'Freshman (9)', 'Sophomores (10)', 'Juniors (11)', 'Seniors (12)'];

  @ViewChild('groupInput') groupInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  @Output() voted = new EventEmitter<boolean>();

  constructor() {
    this.filteredGroups = this.groupCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allGroups.slice()));
  }

  add(event: MatChipInputEvent): void {
    // Add group only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our group
      if ((value || '').trim()) {
        this.groups.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.groupCtrl.setValue(null);
    }
  }

  remove(group: string): void {
    const index = this.groups.indexOf(group);

    if (index >= 0) {
      this.groups.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.groups.push(event.option.viewValue);
    this.groupInput.nativeElement.value = '';
    this.groupCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allGroups.filter(group => group.toLowerCase().indexOf(filterValue) === 0);
  }
  onBackClick() {
    this.voted.emit(true);
    console.log('Clicked');
  }

}

